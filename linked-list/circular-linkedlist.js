function circularLinkedlist(list) {
  let slow = list.getAt(0);
  let fast = list.getAt(0);

  while (fast.next && fast.next.next) {
    slow = fast.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
