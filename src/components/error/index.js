/**
 * created by LynnZhang on 2018/12/8
 */
import React from 'react'
import ErrorBoundary from '../../utils/ErrorBoundary'
@ErrorBoundary('i am not ok')
export default class Error extends React.Component{
    constructor() {
        super()
    }
    // 这个异步错误 ErrorBoundary组件不会捕获到 但是在入口组件写的全局window.onerror事件捕获到了
    componentDidMount() {
        setTimeout(() => {
            // console.log(b)
        }, 100)
    }
    // 事件处理器中的错误 onerror也可以捕获到
    // 这里如果想要hold住错误 需要使用try catch
    handleEventError = () => {
        console.log(error)
    }
    // promise 如果reject 但是没有写catch语句的话 会报错 但是onerror和try-catch和ErrorBoundary组件都无法捕获
    // 需要写一个全局unhandledrejection 事件捕获
    handlePromiseError = () => {
        const promise = new Promise((resolve, reject) => {
            reject()
        })
        promise.then()
    }
    render() {
        return <div>
            <div>hi i am fine</div>
            <button onClick={this.handleEventError}>handle event error</button>
            <button onClick={this.handlePromiseError}>handle promise error</button>
        </div>
    }
}