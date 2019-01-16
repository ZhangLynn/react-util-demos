/**
 * created by LynnZhang on 2019/1/15
 */
import React, { Fragment, lazy, Suspense } from 'react';
import { Button, Tabs } from 'antd';
import { List, Map } from 'immutable';
import ListWrap from '../components/performance/list';
import VariableItem from '../components/performance/variableItem';
import MemoComponent from '../components/performance/memoComponent'
import RefComponent from '../components/performance/refComponent'
const ShouldUpdateComponent = lazy(() => import('../components/performance/shouldUpdateComponent'));
const TabPane = Tabs.TabPane;
export default class Performance extends React.Component{
    constructor(props) {
        super(props);
        // const $$list = List([1, 2]);
        // 面对item这么深层次的对象 如果你想改变它会怎么做
        this.state = {
            render: true,
            memo: 'memo',
            list: [1,2],
            info: Map({
                person: {
                    id: '1991-11-07',
                    firstName: 'lynn',
                    lastName: 'zhang'
                }
            }),
            infoImmutable: Map({
                name: 'lynn'
            }),
            items: [1, 2, 3]
        };
    }
    renderFun = () => {
        this.setState({});
    }
    testMemo = () => {
        this.setState({})
    }
    addList = () => {
        this.setState({
            // list: [...this.state.list, 3]
        })
    }
    changeName = () => {
        // 面对这个深层的对象, 改变其中属性, 因为纯组件缘故它是不会渲染这个改变的, 因为纯组件只做浅比较, 比较不到这个改变, 就忽略了重要的渲染
        // let info = this.state.info;
        // info.person.firstName = 'tao'
        // this.setState({
        //     info
        // })
        let info = this.state.info;
        info.name = 'yiyi';
        this.setState({
            info
        })
    }
    immutableChangeName = () => {
        let changeObj = this.state.infoImmutable;
        let person = changeObj.set('name', 'yiyi');
        this.setState({
            infoImmutable: person
        })
    }

    render() {
        return <Fragment>

            <Tabs defaultActiveKey="1">
                <TabPane tab="ShouldUpdate" key="1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ShouldUpdateComponent custom={this.state.render}/>
                    </Suspense>
                    <Button type='primary' onClick={this.renderFun} style={{width: 100}}>render</Button>
                </TabPane>
                <TabPane tab="Memo" key="2">
                    <MemoComponent data={this.state.memo}/>
                    <Button type='primary' onClick={this.testMemo} style={{width: 100}}>testMemo</Button>
                </TabPane>
                <TabPane tab="Key Usage" key="3">
                    <ListWrap data={this.state.list}/>
                    <Button type='primary' onClick={this.addList} style={{width: 100}}>add</Button>
                </TabPane>
                <TabPane tab="Immutable" key="4">
                    <VariableItem data={this.state.infoImmutable} list={this.state.items}/>
                    <Button type='primary' onClick={this.changeName} style={{width: 100}}>change</Button>
                    <Button type='primary' onClick={this.immutableChangeName} style={{width: 200}}>immutableChangeName</Button>
                </TabPane>
                <TabPane tab="Ref" key="5">
                    <RefComponent/>
                </TabPane>
                <TabPane tab="Tab 3" key="6">Content of Tab Pane 3</TabPane>
                <TabPane tab="Tab 1" key="7">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ShouldUpdateComponent custom={this.state.render}/>
                    </Suspense>
                </TabPane>
                <TabPane tab="Tab 2" key="8">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="9">Content of Tab Pane 3</TabPane>
            </Tabs>





        </Fragment>
    }
}
