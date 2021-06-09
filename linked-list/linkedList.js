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
}

// const node = new Node(10);
const list = new LinkedList();
list.insetFirst(10);
list.insetFirst(20);
list.insetFirst(30);
list.clear();
console.log(list);
