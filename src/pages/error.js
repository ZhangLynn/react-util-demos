/**
 * created by LynnZhang on 2018/12/8
 */
import React from 'react'
import ErrorUI from '../components/error'
export default class Error extends React.Component{
    componentDidMount() {
        window.onerror = (a, b, c, d, e) => {
            // console.log(a)
            // console.log(b)
            // console.log(c)
            // console.log(d)
            // console.log(e)
        }
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