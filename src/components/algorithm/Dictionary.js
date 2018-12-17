/**
 * created by LynnZhang on 2018/12/17
 */
let items = {};
export default class Dictionary {
    has(key) {
        return key in items;
    }
    set(key, value) {
        items[key] = value;
    }
    remove(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? items[key] : undefined
    }
    values() {
        let values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values;
    }
}