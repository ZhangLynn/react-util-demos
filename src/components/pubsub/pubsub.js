/**
 * created by LynnZhang on 2019/1/13
 */

export default class Pubsub {
    constructor() {
        this.topics = {};
        this.topicId = 0;
    }
    subscribe(type, topic) {
        if (!this.topics[type]) {
            this.topics[type] = []
        }
        const token = (++this.topicId).toString();
        this.topics[type].push({
            token: token,
            func: topic
        })
    }
    unsubscribe(type, topic) {
        this.topics[type]
        && (this.topics[type] = this.topics[type].filter(item => item !== topic));
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
