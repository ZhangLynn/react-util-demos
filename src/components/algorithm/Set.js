/**
 * created by LynnZhang on 2018/12/18
 */
class MySet {
    constructor() {
       this.items = {};
    }
    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }
    remove(value) {
        if (this.items.hasOwnProperty(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }
    has(value) {
        return this.items.hasOwnProperty(value);
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    values() {
        return Object.keys(this.items)
    }

}
export default function intersection() {
    let interSet = new MySet();
    let setA = new MySet();
    setA.add(1);
    let valuesA = setA.values();
    let setB = new MySet();
    setB.add(2);
    let valuesB = setB.values();
    for (let i of valuesA) {
        for (let j of valuesB) {
            if (i === j) {
                interSet.add(i)
            }
        }
    }
    console.log(interSet)
}
