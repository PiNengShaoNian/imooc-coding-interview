export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const buildLinkedList = (arr: number[]): ListNode => {
  if (!arr.length) throw new Error(`Can't build linkdlist from an empty array`)

  let head = new ListNode(arr[0], null)
  let ans = head
  for (let i = 1; i < arr.length; ++i) {
    const newNode = new ListNode(arr[i], null)
    head.next = newNode
    head = newNode
  }

  return ans
}
