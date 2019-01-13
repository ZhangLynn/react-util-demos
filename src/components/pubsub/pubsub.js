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
    unsubscribe(token) {
        for ( let m in this.topics ) {
            if ( this.topics[m] ) {
                for ( let i = 0, j = this.topics[m].length; i < j; i++ ) {
                    if ( this.topics[m][i].token === token ) {
                        this.topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
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
