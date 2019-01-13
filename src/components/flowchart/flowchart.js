/**
 * created by LynnZhang on 2018/12/11
 */
import React from 'react';
import { Modal, message } from 'antd';
import { jsPlumb } from 'jsplumb';
import img from '../image/index.jpg';
import style from './style.less'
const DATA_LEFT = [{
    name: '1A',
    id: '1A'
}]
const DATA_RIGHT = [{
    name: '2A',
    id: '2A'
}];
const DATASOURCE = [[{
    name: '1A',
    id: '1A'
}, {
    name: '1B',
    id: '1B'
}, {
    name: '1C',
    id: '1C'
}, {
    name: '1D',
    id: '1D'
}], [{
    name: '2A',
    id: '2A'
}], [{
    name: '3A',
    id: '3A'
}, {
    name: '3B',
    id: '3B'
}, {
    name: '3C',
    id: '3C'
}], [{
    name: '4A',
    id: '4A'
}], [{
    name: '5A',
    id: '5A'
}, {
    name: '5B',
    id: '5B'
}]]
class TableDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            btnLoading: false,
            datas_left: [],
            datas_right: [],
            data_source: [],
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
        this.refs.nodes = [];
        DATASOURCE.map((data, index) => {
            this.refs.nodes[index] = [];
        })
        this.refs.startNode = '';
        this.refs.nodes_right = [];
        this.refs.nodes_left = [];
    }

    componentWillReceiveProps(next) {

    }




    getQuestions = () => {
        this.setState({
            datas_left: DATA_LEFT,
            datas_right: DATA_RIGHT,
            data_source: DATASOURCE
        }, () => {
            DATASOURCE.map((data, index) => {
                this.initNodes(this.refs.nodes[index]);
                this.rjsp.addEndpoint('start', {
                    uuid: 'rightstart',
                    isSource: true,
                    isTarget: false,
                    maxConnections: -1,
                    anchor: 'Right'
                });
            })
        });
    }

    initJSPlumb = () => {
        this.rjsp = jsPlumb.getInstance({
            Anchor: ['Right', 'Left'],
            Anchors: ['Right', 'Left'],
            ConnectionsDetachable: true,
            ConnectionOverlays: [

            ],
            Connector: 'Flowchart',
            Container: 'mapConnection',
            DoNotThrowErrors: false,
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            DropOptions: {},
            Endpoint: 'Dot',
            Endpoints: [null, null],
            EndpointOverlays: [],
            EndpointStyle: { fill: 'transparent', stroke: '#6f7f8d', radius: 4, strokeWidth: 1 },
            EndpointStyles: [null, null],
            EndpointHoverStyle: { fill: '#6f7f8d', stroke: '#6f7f8d', radius: 4, strokeWidth: 1 },
            EndpointHoverStyles: [null, null],
            HoverPaintStyle: { stroke: '#6f7f8d', strokeWidth: 3 },
            LabelStyle: { color: 'black' },
            LogEnabled: false,
            Overlays: [],
            MaxConnections: 10,
            PaintStyle: { stroke: '#6f7f8d', strokeWidth: 1, joinstyle: 'round' },
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

        node.map(value => {
            this.rjsp.addEndpoint(value.id, {
                uuid: 'left' + value.id,
                isSource: false,
                isTarget: true,
                maxConnections: -1,
                anchor: 'Left'
            });
            this.rjsp.addEndpoint(value.id, {
                uuid: 'right' +value.id,
                isSource: true,
                isTarget: false,
                maxConnections: -1,
                anchor: 'Right'
            });
        });
        this.rjsp.setSuspendDrawing(false, true);
    };
    initEdges = (edges) => {
        this.rjsp.setSuspendDrawing(true);
        edges.map(item => {
            this.rjsp.connect({ uuids: [item.leftId, item.rightId]}, {paintStyle: { stroke: item.isCorrect ? '#6f7f8d' : 'red'}});
        })
        this.rjsp.setSuspendDrawing(false, true);
    };
    addEdge = (info) => {
        console.log(info)
        this.setState({
            edges: [...this.state.edges, info],
        });
        this.rjsp.connect({ uuids: ['right' + info.sourceId, 'left' + info.targetId]});
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
            <div id='mapConnection' style={{padding: '0px 20px'}}>
                <i className="font-family icon-bianji"></i>
                <div
                    id='start'
                    className={style.start}
                    ref={ele => this.refs.startNode = ele}
                >
                    start
                </div>
                {
                    this.state.data_source.map((data, index) => {
                        return <div className={style.wrap}>
                            <p className={style.head}>{`CLOSE${index}`}</p>
                            {data.map((item, sIndex) => {
                                return (
                                    <div
                                    id={item.id}
                                    className={style.item}
                                    ref={ele => this.refs.nodes[index][sIndex] = ele }
                                    >
                                        <img className={style.img} src={img} alt=""/>
                                    </div>
                                )
                            })}
                        </div>
                    })
                }
            </div>
        );
    }
}

export default TableDemo;
