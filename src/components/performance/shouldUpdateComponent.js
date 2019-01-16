/**
 * created by LynnZhang on 2019/1/15
 */
import React from 'react';
// 做了一个浅比较
export default class ShouldUpdateComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.custom !== this.props.custom) {
            return true
        }
        return false
    }
    render() {
        console.log('render')
        return <div>使用shouldComponentUpdate做了一个浅比较</div>
    }
}
