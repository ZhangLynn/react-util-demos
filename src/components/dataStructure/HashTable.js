/**
 * created by LynnZhang on 2018/12/17
 */
import LinkedList from './LinkedList'
const loseloseHashCode = function(key) {
    let hash = 0;
    for (let i = 0; i< key.length; i++) {
        hash += key.charCodeAt(i)
    }
    return hash % 37
}
const ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
}
export default class HashTable {
    constructor() {
        this.table = [];
    }
    put(key, value) {
        const position = loseloseHashCode(key);
        if(this.table[position] == undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append(new ValuePair(key, value))
    }
    get(key) {
        const position = loseloseHashCode(key);
        if (this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.key
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }
    remove(key) {
        const position = loseloseHashCode(key);
        if (this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            if (current.element === key) {
                return current
            }
            while (current.next) {
                if (current.element === key) {
                    this.table[position].remove(key)
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                }
                current = current.next
            }
            if (current.element.key === key) {
                this.table[position].remove(key);
                if (this.table[position].isEmpty()) {
                    this.table[position] = undefined
                }
            }
            return true
        } else {
            return false
        }
    }
}