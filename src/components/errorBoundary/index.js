/**
 * created by LynnZhang on 2018/12/8
 */
import React from 'react'
import ErrorBoundary from '../../utils/ErrorBoundary'
@ErrorBoundary('im not ok')
export default class ErrorBoundaryUI extends React.Component{
    constructor() {
        super()
    }
    componentDidMount() {
        console.log(a)
    }
    render() {
        return <div>hi i am fine</div>
    }
}