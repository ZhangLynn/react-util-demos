/**
 * created by LynnZhang on 2018/12/18
 */
const Queue = function() {
    let items = [];
    this.enqueue = function(element) {
        items.push(element)
    }
    this.dequeue = function() {
        return items.shift()
    }
    this.front = function() {
        return items[0]
    }
    this.isEmpty = function() {
        return items.length === 0
    }
    this.clear = function() {
        items = []
    }
    this.size = function() {
        return items.length
    }
}
export default Queue