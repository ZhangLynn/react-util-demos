/**
 * created by LynnZhang on 2018/12/17
 */
let root = null;
const insertNode = (root, newNode) => {
    if (newNode.key < root.key) {
        if (root.left === null) {
            root.left = newNode
        } else {
            insertNode(root.left, newNode)
        }
    } else {
        if (root.right === null) {
            root.right = newNode
        } else {
            insertNode(root.right, newNode)
        }
    }
}
const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback)
    }
}
const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback)
    }
}
const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}
const searchMinValueNode = (node, callback) => {
    if (node !== null) {
        if (node.left !== null) {
            searchMinValueNode(node.left, callback)
        } else {
            callback(node.key)
        }
    }
}
const searchMaxValueNode = (node, callback) => {
    if (node !== null) {
        if (node.right !== null) {
            searchMaxValueNode(node.right, callback)
        } else {
            callback(node.key)
        }
    }
}
const searchNode = (node, key) => {
    if (node !== null) {
        if (node.key === key) {
            return true
        } else if (key < node.key){
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return false
        }
    } else {
        return false
    }
}


class BinarySearchTree {
    Node(key) {
        this.key = key;
        this.left = null;
        this.right = null
    }
    // 插入某个值
    insert(key) {
        const newNode = new this.Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    }
    // 中序遍历
    inOrderTraverse(cb) {
        inOrderTraverseNode(root, cb)
    }
    // 先序遍历
    preOrderTraverse(cb) {
        preOrderTraverseNode(root, cb)
    }
    // 后序遍历
    postOrderTraverse(cb) {
        postOrderTraverseNode(root, cb)
    }
    // 搜索最小值
    searchMinValue(cb) {
        searchMinValueNode(root, cb)
    }
    // 搜索最大值
    searchMaxValue(cb) {
        searchMaxValueNode(root, cb)
    }
    // 搜索指定值
    search(key, cb) {
        return searchNode(root, key, cb)
    }
}
let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree);
tree.inOrderTraverse(console.log);
tree.preOrderTraverse(console.log);
tree.postOrderTraverse(console.log);

export default tree