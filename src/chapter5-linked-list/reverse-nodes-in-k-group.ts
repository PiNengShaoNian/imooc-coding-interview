import { ListNode } from './LinkedList'

const reverse = (l: ListNode, r: ListNode): ListNode | null => {
  let prev: ListNode | null = null
  let next: ListNode | null = null
  let cur: ListNode = l

  while (cur !== r) {
    next = cur.next!

    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

export const reverseKGroup = (
  head: ListNode | null,
  k: number
): ListNode | null => {
  let l: ListNode | null
  let r: ListNode | null
  l = r = head

  for (let i = 0; i < k; ++i) {
    if (r === null) return head

    r = r.next
  }

  const newHead = reverse(l!, r!)

  l!.next = reverseKGroup(r, k)

  return newHead
}
