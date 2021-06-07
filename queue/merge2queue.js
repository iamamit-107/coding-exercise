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

  peek() {
    return this.data[this.data.length - 1];
  }
}

function merge2queue(queue1, queue2) {
  const q = new queue();

  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      q.add(queue1.remove());
    }

    if (queue2.peek()) {
      q.add(queue2.remove());
    }
  }

  return q;
}

const queue11 = new queue();
queue11.add(3);
queue11.add(2);
const queue22 = new queue();
queue22.add(1);

console.log(queue11);
console.log(queue22);
console.log(merge2queue(queue11, queue22));
