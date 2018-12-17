/**
 * created by LynnZhang on 2018/12/14
 */
// 这里不要用箭头函数绑定
// TODO 不过这里的this 指向谁
let head = null,
    length = 0;
const Node = function (element){
    this.element = element;
    this.next = null;
}
export default class LinkedList {
    getHead() {
        return head
    }
    append(element) {
        let node = new Node(element),
            current;
        if (head === null) {
            head = node
        } else {
            // TODO 这里改变current会改变head吗
            current = head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    insert(position, element) {
        if (position > -1 && position < length) {
            let newNode = new Node(element),
                current = head,
                previous = current,
                index = 0;
            if (position === 0) {
                newNode.next = current;
                head = newNode;
            } else {
                while (index ++ < position) {
                   previous = current;
                   current = current.next
                }
                previous.next = newNode;
                newNode.next = current;
                length ++;
                return true
            }
        } else {
            return false
        }
    }
    removeAt(position) {
        // 第一步检查边界值
        if (position > -1 && position < length) {
            let current = head,
                previous = current,
                index = 0;
            if (position === 0) {
                head = head.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--
            return current.element
        } else {
            return null
        }
    }
    // remove(element) {
    //     if (head.element === element) {
    //         head = null;
    //         length = 0;
    //         return head.element
    //     }
    //     let current = head,
    //         previous = current;
    //     while (current.element !== element && current.next) {
    //         previous = current;
    //         current = current.next;
    //     }
    //     if (current.element === element) {
    //         previous.next = current.next;
    //         length--
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
        let current = head,
            index = 0;
        while (current) {
            if (current.element == element) {
                return index
            }
            index++;
            current = current.next;
        }
        return -1

    }
    isEmpty() {}
    size() {}
    toString() {}
    print() {}
}