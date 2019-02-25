/**
 * created by LynnZhang on 2018/12/14
 */
// 这里不要用箭头函数绑定
// TODO 不过这里的this 指向谁
// TODO 私有变量和私有方法 不能在实例外被访问和更改

const Node = function (element){
    this.element = element;
    this.next = null;
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    getHead() {
        return this.head
    }
    append(element) {
        let node = new Node(element),
            current;
        if (this.head === null) {
            this.head = node
        } else {
            // TODO 这里改变current会改变this.head吗
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    insert(position, element) {
        if (position > -1 && position < this.length) {
            let newNode = new Node(element),
                current = this.head,
                previous = current,
                index = 0;
            if (position === 0) {
                newNode.next = current;
                this.head = newNode;
            } else {
                while (index ++ < position) {
                   previous = current;
                   current = current.next
                }
                previous.next = newNode;
                newNode.next = current;
                this.length ++;
                return true
            }
        } else {
            return false
        }
    }
    removeAt(position) {
        // 第一步检查边界值
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous = current,
                index = 0;
            if (position === 0) {
                this.head = this.head.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }
    // remove(element) {
    //     if (this.head.element === element) {
    //         this.head = null;
    //         this.length = 0;
    //         return this.head.element
    //     }
    //     let current = this.head,
    //         previous = current;
    //     while (current.element !== element && current.next) {
    //         previous = current;
    //         current = current.next;
    //     }
    //     if (current.element === element) {
    //         previous.next = current.next;
    //         this.length--
    //         return current.element
    //     } else {
    //         return null
    //     }
    //
    // }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index)
    }
    indexOf(element) {
        let current = this.head,
            index = 0;
        while (current) {
            if (current.element === element) {
                return index
            }
            index++;
            current = current.next;
        }
        return -1

    }
    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    toString() {}
    print() {}
}
const link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);
link.append(5);
export default link
