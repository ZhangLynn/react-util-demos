/**
 * created by LynnZhang on 2018/12/22
 */
import React from 'react'
import {module, longFun} from '../components/webpack/IIFE'

function foo() {
    for (var i = 0; i < 5; i++) {
        setTimeout(console.log(i), i*1000)
    }
}
export default () => {
    console.log(module)
    console.log(longFun()());
    foo();
    return <div>webpack</div>
}
