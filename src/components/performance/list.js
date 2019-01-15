/**
 * created by LynnZhang on 2019/1/15
 */
import React , { Fragment } from 'react';

export default class ListItem extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return <Fragment>{
            this.props.data.map(item => (<div key={item}>{item}</div>))
        }</Fragment>
    }
}
