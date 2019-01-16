/**
 * created by LynnZhang on 2019/1/16
 */

import React from 'react';
export default class RefComponent extends React.Component{
    constructor(props) {
        super(props);
        this.getRef = React.createRef();
    }
    logRef = () => {
        console.log(this.getRef)
    }
    render() {
        return <React.Fragment>
            使用新api createRef
            <div ref={this.getRef}>ref test</div>
            <button onClick={this.logRef} style={{width: 100}}>log ref</button>
        </React.Fragment>
    }
}
