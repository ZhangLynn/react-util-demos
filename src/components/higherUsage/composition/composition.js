/**
 * created by LynnZhang on 2019/1/23
 */
import React from 'react';
import Grandson from './grandson';
import Child from "./child"
// 组件的混合模式 但是感觉hold不住复杂组件啊
export default class Composition extends React.Component {
    state = {
        value: 'composition'
    }
    render() {
        const grandson = (
            <div>
                I am a wrapper and I do not need props
                <Grandson name={this.state.value}/>
            </div>

        );
        return <React.Fragment>
            <Child grandson={grandson}/>
        </React.Fragment>
    }
}
