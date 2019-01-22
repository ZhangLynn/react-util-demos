/**
 * created by LynnZhang on 2019/1/13
 */

export default class Pubsub {
    constructor() {
        this.topics = {};
    }
    subscribe(type, topic) {
        if (!this.topics[type]) {
            this.topics[type] = []
        }
        this.topics[type].push({
            func: topic
        })
    }
    unsubscribe(type, topic) {
        this.topics[type]
        && (this.topics[type] = this.topics[type].filter(item => item === topic));
        return this;
    }
    publish(type, args) {
        if (!this.topics[type]) {
            return false
        }
        let subscribers = this.topics[type],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func( args );
        }

        return this;
    }
}
