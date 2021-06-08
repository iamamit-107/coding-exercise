class stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class queue {
  constructor() {
    this.stack1 = new stack();
    this.stack2 = new stack();
  }

  add(val) {
    this.stack1.push(val);
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    let remove = this.stack2.pop();

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }

    return remove;
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    let value = this.stack2.peek();

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }

    return value;
  }
}

const q = new queue();
q.add(1);
q.add(2);
q.add(3);
q.remove();
console.log(q);
console.log(q.peek());
