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

  insetFirst(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
}

// const node = new Node(10);
const list = new LinkedList();
list.insetFirst(10);
list.insetFirst(20);
list.insetFirst(30);
console.log(list);
