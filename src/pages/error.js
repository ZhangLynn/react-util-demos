/**
 * created by LynnZhang on 2018/12/8
 */
import React from 'react'
import ErrorUI from '../components/error'
import namelist from '../utils/webpack-loader/namelist.txt'
export default class Error extends React.Component{
    // 统一做错误处理
    componentDidMount() {
        window.onerror = (a, b, c, d, e) => {
            // console.log(a)
            // console.log(b)
            // console.log(c)
            // console.log(d)
            // console.log(e)
        }
        console.log(namelist)
        window.addEventListener('error', event => {
            console.log(event)
        }, true)
        window.addEventListener('unhandledrejection', event => {
            console.log(event)
        })
    }
    render() {
        return <ErrorUI/>
    }
}