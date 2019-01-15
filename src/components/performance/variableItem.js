/**
 * created by LynnZhang on 2019/1/15
 */
import React, { Fragment } from 'react';
import pureRender from 'pure-render-decorator';
@pureRender
// 用了pureRender 只要本身props不变化 组件避免了无畏渲染
export default class VariableItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [1, 2, 3]
        }
    }
    handleClick = () => {
        const { items } = this.state;
        items.pop();
        this.setState({ items });
    }
    render() {
        console.log('render');
        const name = this.props.data.get('name')
        return <Fragment>
            {/*<div>{person.firstName}</div>*/}
            {/*<div>{person.lastName}</div>*/}
            <div>{name}</div>
            {this.state.items.map(item => (<div key={item}>{item}</div>))}
            <button onClick={this.handleClick}>减少</button>
            {/*<div>{this.props.data.info.person.firstName}</div>*/}
            {/*<div>{this.props.data.info.person.lastName}</div>*/}
        </Fragment>
    }
}
