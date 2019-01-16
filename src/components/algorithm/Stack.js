/**
 * created by LynnZhang on 2018/12/18
 */
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
        return this.items.length
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}
