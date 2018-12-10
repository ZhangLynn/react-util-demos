/**
 * created by LynnZhang on 2018/12/9
 */
import React from 'react'
const RenderHijackHoc = hijackInfo => WrapComponent => {
    return class RenderHijackHoc extends WrapComponent{
        constructor() {
            super();
        }
        // 劫持包裹组件的生命周期
        componentDidMount() {
            console.log('hi');
            super.componentDidMount()
        }
        render() {
            return super.render().props.children[1].map(item => {
                return <div style={{backgroundColor: item.props.children === hijackInfo ? 'red' : 'green'}}>
                    {item.props.children}
                </div>
            })
        }
    }
}
export default RenderHijackHoc