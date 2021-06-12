function reverse(list) {
  let node = list;
  let prev = null;

  while (node) {
    //   save the next node
    let next = node.next;
    // reverse pointer
    node.next = prev;

    // increment prev to current node
    prev = node;
    // increment node to the next node
    node = next;
  }

  return prev;
}
