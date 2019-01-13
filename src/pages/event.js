/**
 * created by LynnZhang on 2019/1/13
 */
import React from 'react';
import b from '../components/event/b'
import c from '../components/event/c'

const event = new CustomEvent('broadcast', { detail: 'custom'});
document.dispatchEvent(event);
const Event = () => {
    return <div>event</div>
}
export default Event
