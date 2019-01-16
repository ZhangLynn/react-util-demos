/**
 * created by LynnZhang on 2018/12/17
 */
import Dictionary from './Dictionary'
// import Queue from './Queue'
class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary()
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, [])
    }
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v)
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + '->';
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s
    }
    initializeColor() {
        let colors = [];
        for (let i = 0; i < this.vertices.length; i++) {
            colors[this.vertices[i]] = 'white';
        }
        return colors
    }
    // bfs(v, callback) {
    //     let queue = new Queue();
    //     queue.enqueue(v);
        // while (!queue.isEmpty()) {
        //     let u = queue.dequeue(v);
        //     let neighbors = this.adjList.get(u);
        //     let colors = this.initializeColor();
        //     colors[u] = 'grey';
        //     for (let i = 0; i < neighbors.length; i++) {
        //         let w = neighbors[i];
        //         if (colors[w] === 'white') {
        //             colors[w] = 'grey';
        //             queue.enqueue(w);
        //         }
        //     }
        //     colors[u] = 'black'
        // }
    //     if (callback) {
    //         callback(v)
    //     }
    // }
}
let graph = new Graph(),
    myVertices = ['A', 'B', 'C'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
export default graph
