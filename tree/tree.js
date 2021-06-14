class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    let node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    //   get the root value of tree and store in an array
    let arr = [this.root];

    while (arr.length) {
      // get the first element from the array
      let node = arr.unshift();

      //   push to the last in the array all of the children of node
      arr.push(...node.children);

      //   function on the current node
      fn(node);
    }
  }

  traverseDF(fn) {
    //   get the root value of tree and store in an array
    let arr = [this.root];

    while (arr.length) {
      // get the first element from the array
      let node = arr.unshift();

      //   push to the first in the array all of the children of node
      arr.shift(...node.children);

      //   function on the current node
      fn(node);
    }
  }
}
