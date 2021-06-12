function fromLast(list, position) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (position > 0) {
    fast = fast.next;
    position--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
