class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

export function copyRandomList(head: Node | null): Node | null {
  for (let temp: Node | null = head; temp; temp = temp!.next!.next) {
    const node = new Node(temp.val)
    node.next = temp.next
    temp.next = node
  }

  for (let temp: Node | null = head; temp; temp = temp!.next!.next) {
    temp.next!.random = temp.random ? temp.random.next : null
  }
  let tail = new Node(0),
    ans = tail
  for (let temp: Node | null = head; temp; temp = temp!.next) {
    tail = tail.next = temp.next!
    temp.next = tail.next
  }

  return ans.next
}
