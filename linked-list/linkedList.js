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
        return node;
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

  //   Insert data to the last
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  //   Get Element by index number
  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  //   remove by index
  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  //   InsertAt anywhere by index
  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (index === 0) {
      let node = new Node(data, this.head);
      this.head = node;
    }

    let previous = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, previous.next);
    previous = node;
  }
}

// const node = new Node(10);
const list = new LinkedList();
list.insetFirst(10);
list.insetFirst(20);
list.insetFirst(30);
list.insertLast(40);
console.log(list.getAt(1));
