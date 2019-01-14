/**
 * created by LynnZhang on 2019/1/13
 */
import React from 'react';
import b from '../components/event/b'
import c from '../components/event/c'
import foo from '../components/event/promise'
// 自定义事件
const event = new CustomEvent('broadcast', { detail: 'custom'});
document.dispatchEvent(event);
// promise 事件
foo();
const Event = () => {
    return <div>event</div>
}
export default Event
