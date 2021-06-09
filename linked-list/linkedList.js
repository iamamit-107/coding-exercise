class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //   Insert data in the first position
  insetFirst(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  //   Get the last element of the Linked List
  getLast() {
    let node = this.head;

    while (node) {
      if (node.next == null) {
        return node.data;
      }

      node = node.next;
    }
  }

  //   Clear the Linked List
  clear() {
    this.head = null;
  }

  //   Remove first item form linked list
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  //   Remove Last element from list
  removeLast() {
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
    return;
  }
}

// const node = new Node(10);
const list = new LinkedList();
list.insetFirst(10);
list.insetFirst(20);
list.insetFirst(30);
list.removeLast();
console.log(list);
