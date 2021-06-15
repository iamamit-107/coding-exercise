// Implementation of Binary Search Tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  //   Insert a data in a BST
  insert(data) {
    if (this.data > data && this.left) {
      this.left.insert(data);
    } else if (this.data > data) {
      this.left = new Node(data);
    } else if (this.data < data && this.right) {
      this.right.insert(data);
    } else {
      this.right = new Node(data);
    }
  }

  //   Check if if the data is in the BST or not
  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}
