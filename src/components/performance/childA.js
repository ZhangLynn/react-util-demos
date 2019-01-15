/**
 * created by LynnZhang on 2019/1/15
 */
import React from 'react';

export default class ChildA extends React.Component{
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
        return <div>A</div>
    }
}
