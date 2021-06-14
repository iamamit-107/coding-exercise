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
}
