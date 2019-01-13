/**
 * created by LynnZhang on 2018/12/11
 */
import React from 'react';
import { Modal, Button, message } from 'antd';
import httpAxios from '../../services/httpAxios';
import api from '../../services/projectApi';
import styles from './CardList.less';
import { getConnectData } from './getDataUtil';
import { jsPlumb } from 'jsplumb';
const DATA_LEFT = [{
    name: '1A',
    id: '1A'
}]
const DATA_RIGHT = [{
    name: '2A',
    id: '2A'
}]
class ConnectCardModal extends React.Component {
  constructor() {
    super();
    this.state = {
      btnLoading: false,
      datas_left: [],
      datas_right: [],
      edges: [],
    };
    this.pairs = []
  }

  componentWillMount() {
    this.refs = {};
  }

  componentDidMount() {
    this.getQuestions();
    // this.getRecords()
    this.initJSPlumb();
    this.refs.nodes_right = [];
    this.refs.nodes_left = [];
  }

  componentWillReceiveProps(next) {

  }

  getRecords = () => {
    if (this.props.titleId) {
      httpAxios(api.getRecords).then(res => {
        let time = 0;
        let id = '';
        res.rows.map(item => {
          if (item.playerId === localStorage.getItem('TWO_MAKER_USERID')) {
            id = item.activityId;
            let date = new Date(item.createdAt).getTime();
            if (date > time) {
              time = date
            }
          }
        });
        res.rows.map(item => {
          if (item.playerId === localStorage.getItem('TWO_MAKER_USERID')) {
            if (time === new Date(item.createdAt).getTime()) {
              id = item.id
            }
          }
        });
        let url = api.getRecords.url + '/' + id;
        httpAxios({...api.getRecords, url}).then(res => {
          this.initEdges(res.links || [])
        })
      })
    }

  }


  getQuestions = () => {
      this.setState({
          datas_left: DATA_LEFT,
          datas_right: DATA_RIGHT,
      }, () => {
          this.initNodes(this.refs.nodes_left, 'left');
          this.initNodes(this.refs.nodes_right, 'right');
          // setTimeout(this.initEdges(), 500)
      });
  }

  initJSPlumb = () => {
    this.rjsp = jsPlumb.getInstance({
      Anchor: ['Right'],
      Anchors: ['Right'],
      ConnectionsDetachable: true,
      ConnectionOverlays: [
        ['PlainArrow', {
          location: 1,
          visible: true,
          width: 7,
          length: 7,
          id: 'ARROW',
        }],
      ],
      Connector: 'Straight',
      Container: 'mapConnection',
      DoNotThrowErrors: false,
      DragOptions: { cursor: 'pointer', zIndex: 2000 },
      DropOptions: {},
      Endpoint: 'Dot',
      Endpoints: [null, null],
      EndpointOverlays: [],
      EndpointStyle: { fill: 'transparent', stroke: '#1565C0', radius: 4, strokeWidth: 1 },
      EndpointStyles: [null, null],
      EndpointHoverStyle: { fill: '#1565C0', stroke: '#1565C0', radius: 4, strokeWidth: 1 },
      EndpointHoverStyles: [null, null],
      HoverPaintStyle: { stroke: '#1565C0', strokeWidth: 3 },
      LabelStyle: { color: 'black' },
      LogEnabled: false,
      Overlays: [],
      MaxConnections: 10,
      PaintStyle: { stroke: '#1565C0', strokeWidth: 1, joinstyle: 'round' },
      ReattachConnections: true,
      RenderMode: 'svg',
      Scope: 'jsPlumb_DefaultScope',
      reattach: true,
      datas: [],
      data_right: [],
      subjectSourceId: '',
      subjectTargetId: '',
    });
    this.rjsp.bind('beforeDrop', this.jspBeforeDrop);
  };
  jspBeforeDrop = (info) => {
    info.targetId = info.dropEndpoint.elementId;
    let connections = this.rjsp.getConnections({ source: info.sourceId, target: info.targetId });
    if (info.targetId === info.sourceId) {
      return;
    } else {
      if (connections.length === 0) {  // 检查是否已经建立过连接
        this.addEdge(info);
      } else {
        Modal.warning({
          title: '两个节点之间只能有一条连接',
        });
      }
    }
  };
  initNodes = (node, pos) => {
    this.rjsp.setSuspendDrawing(true);
    let anchor = 'Right';
    if (pos === 'right') {
      anchor = 'Left';
    }
    node.map(value => {
      this.rjsp.addEndpoint(value.id, {
        uuid: value.id,
        isSource: true,
        isTarget: true,
        maxConnections: -1,
      }, { anchor: anchor });
    });
    this.rjsp.setSuspendDrawing(false, true);
  };
  initEdges = (edges) => {
    this.rjsp.setSuspendDrawing(true);
    edges.map(item => {
      this.rjsp.connect({ uuids: [item.leftId, item.rightId]}, {paintStyle: { stroke: item.isCorrect ? '#1565C0' : 'red'}});
    })
    this.rjsp.setSuspendDrawing(false, true);
  };
  addEdge = (info) => {
    this.setState({
      edges: [...this.state.edges, info],
    });
    this.rjsp.connect({ uuids: [info.sourceId, info.targetId]});
  };

  handleSubmit = () => {
    const links = this.state.edges.map(item => ({leftId: item.sourceId, rightId: item.targetId}))
    const checkLins = links.map(link => {
      let flag = false;
      this.pairs.map(pair => {
        if (link.leftId === pair.leftId) {
          if (link.rightId === pair.rightId) {
            flag = true
          } else {
            flag = false
          }
        }
      });
      if (flag) {
        return {
          ...link,
          isCorrect: true
        }
      } else {
        return {
          ...link,
          isCorrect: false
        }
      }
    })
    let correctCount = [];
    checkLins.map(item => {
      if (item.isCorrect === true) {
        correctCount.push(item)
      }
    });
    correctCount = correctCount.length;
    const score = (correctCount / checkLins.length) * 100;
    const params = {
      activityId: this.props.titleId,
      playerId: localStorage.getItem('TWO_MAKER_USERID'),
      links: checkLins,
      score: score
    }
    httpAxios(api.postRecords, params).then(res => {
      if (res.id) {
        message.success('successful');
        this.props.handleCancel()
      }
    })
  };

  handleReset = () => {
    this.setState({
      edges: []
    })
    this.rjsp.deleteEveryConnection()
  }

  render() {
    return (
        <div id='mapConnection'>
          <div style={{ display: 'inline-block', width: '45%' }}>
            {this.state.datas_left.map((node, index) => {
              return (
                <div
                  key={'left' + index}
                  style={{ paddingLeft: 10 , minHeight: 30}}
                  id={node.id}
                  ref={nodes => this.refs.nodes_left[index] = nodes}
                >
                  {node.name}
                </div>
              );
            })}
          </div>
          <div style={{ float: 'right', width: '45%' }}>
            {this.state.datas_right.map((node, index) => {
              return (
                <div
                  key={'right' + index}
                  style={{ paddingLeft: 10 , minHeight: 30}}
                  id={node.id}
                  ref={nodes => this.refs.nodes_right[index] = nodes}
                >
                    {node.name}
                </div>

              );
            })}
          </div>
        </div>
    );
  }
}

export default ConnectCardModal;
