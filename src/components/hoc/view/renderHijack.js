/**
 * created by LynnZhang on 2018/12/9
 */
import React from 'react'
import RenderHijackHoc from '../highorder/renderHijackHoc'
@RenderHijackHoc('banana')
export default class RenderHijack extends React.Component{
    componentDidMount() {
        console.log('i am renderhijack component')
    }
    render() {
        const list = [{
            name: 'apple',
            color: 'red'
        }, {
            name: 'banana',
            color: 'yellow'
        }]
        return <div>
            <p>render hijack test</p>
            {list.map((item, index) => (
                <div key={index} style={{color: item.color}}>{item.name}</div>
            ))}
        </div>
    }
}