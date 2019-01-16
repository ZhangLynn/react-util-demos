/**
 * created by LynnZhang on 2018/12/18
 */
export class Test {
    arr = [];
    add(element) {
        this.arr.push(element)
    }
    get() {
        return this.arr;
    }
}

export function TestES5() {

}

TestES5.prototype.arr = [];
TestES5.prototype.add = function(element) {
    this.arr.push(element)
}
TestES5.prototype.size = function() {
    return this.arr
}

