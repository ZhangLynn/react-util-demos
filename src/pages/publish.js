/**
 * created by LynnZhang on 2019/1/2
 */
import React from 'react';
import Pubsub from '../components/pubsub/pubsub'
class ObservableList {
    constructor() {
        this.observableList = []
    }
    add(ob) {
        this.observableList.push(ob)
    }
}
class Subject {
    constructor() {
        this.observers = new ObservableList();
    }
    add(ob) {
        this.observers.add(ob)
    }
    notify(info) {
        this.observers.observableList.map(observer => {
            observer.update(info)
        })
    }
}
class Observer {
    update(info) {
        console.log(info)
    }
}
// class Publish {
//     constructor() {
//         this.subscribers = {};
//     }
//     subscribe(type, fn) {
//         if (!this.subscribers[type]) {
//             this.subscribers[type] = []
//         }
//         this.subscribers[type].push(fn)
//     }
//     pulish(type, ...arg) {
//         if (this.subscribers[type].length > 0) {
//             this.subscribers[type].map(subscriber => {
//                 subscriber(...arg)
//             })
//         }
//     }
// }
let name = 'none';

const PublishPage = () => {

    const showInfo = () => {
        name = 'change'
    }
    const changeInfo = (callback) => {
        if (callback) {
            callback();
            console.log(name)
        }
    }
    const testObserver = () => {
        const subject = new Subject();
        const observer = new Observer();
        subject.add(observer);
        subject.notify('hhh')
    }
    const testPubSub = () => {
        const pubsub = new Pubsub();
        pubsub.subscribe('log', console.log)
        pubsub.publish('log', 'hi')
    }
    return (
        <React.Fragment>
            <div>自定义监听模式</div>
            <div onClick={changeInfo.bind(null, showInfo)}>click</div>
            <p>观察者模式</p>
            <div onClick={testObserver}>subject</div>
            <p>发布订阅模式</p>
            <div onClick={testPubSub}>pubsub</div>
        </React.Fragment>
    )
}
export default PublishPage
