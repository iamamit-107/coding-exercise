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

const s = new stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
s.pop();
s.pop();
console.log(s);
