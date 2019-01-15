/**
 * created by LynnZhang on 2019/1/15
 */
import React, { Fragment } from 'react';
import { Button } from 'antd';
import { List, Map } from 'immutable';
import ChildA from '../components/performance/childA';
import ListItem from '../components/performance/list';
import VariableItem from '../components/performance/variableItem'
export default class Performance extends React.Component{
    constructor(props) {
        super(props);
        const $$list = List([1, 2]);
        // 面对item这么深层次的对象 如果你想改变它会怎么做
        this.state = {
            render: true,
            list: $$list,
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
        this.setState({
            render: true
        })
    }
    addList = () => {
        this.setState({
            list: this.state.list.push(3)
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
            <ChildA custom={this.state.render}/>
            <Button type='primary' onClick={this.renderFun} style={{width: 100}}>render</Button>
            <ListItem data={this.state.list}/>
            <Button type='primary' onClick={this.addList} style={{width: 100}}>add</Button>
            <VariableItem data={this.state.infoImmutable} list={this.state.items}/>
            <Button type='primary' onClick={this.changeName} style={{width: 100}}>change</Button>
            <Button type='primary' onClick={this.immutableChangeName} style={{width: 100}}>immutableChangeName</Button>
        </Fragment>
    }
}
