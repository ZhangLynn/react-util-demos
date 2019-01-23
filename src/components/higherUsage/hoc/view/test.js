/**
 * created by LynnZhang on 2018/12/11
 */
import React from 'react'

class TestState extends React.Component{
    state = {
        arr: [1, 2]
    }
    render() {
        return <div>{this.state.arr.map(item => item)}</div>
    }
}
const testObj = new TestState();
console.log(testObj);
testObj.state.arr.push(3);
console.log(testObj);
console.log(TestState)
export default class Test extends React.Component{
    render() {
        return <div>
            <TestState/>
        </div>
    }
}