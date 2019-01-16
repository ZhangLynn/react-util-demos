/**
 * created by LynnZhang on 2018/12/13
 */
import React from 'react'
// import LinkedList from '../components/algorithm/LinkedList'
import { Test, TestES5 } from '../components/algorithm/test';
import intersection from '../components/algorithm/Set'
import graph from '../components/algorithm/Graph'

export default class Algorithm extends React.Component{

    initBST() {
        // console.log(graph.toString())
        // graph.bfs('A', console.log)
        // const test = new Test();
        // console.log(Test.arr)
        // test.add(1)
        // console.log(test.arr)
        // console.log(test.get())
        // const tset2 = new Test();
        // tset2.add(2);
        // console.log(tset2.get());
        //
        // const test1 = new TestES5();
        // test1.add(1);
        // const test2 = new TestES5();
        // console.log(test2.size());
        // test2.add(2);
        // console.log(test1.size())
        intersection()
    }
    render() {
        this.initBST();
        return <div>

        </div>
    }
}
