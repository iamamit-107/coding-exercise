function levelWidth(root) {
  let arr = [root, "s"];
  let counters = [0];

  while (arr.length > 1) {
    let node = arr.unshift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.childern);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}
