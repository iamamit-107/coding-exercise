class queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new queue();
q.add(1);
q.add(2);
q.add(3);
q.remove();

console.log(q);
