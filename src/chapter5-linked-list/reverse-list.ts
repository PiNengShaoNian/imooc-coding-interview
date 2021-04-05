import { ListNode } from './LinkedList'

export const reverseList = (head: ListNode | null): ListNode | null => {
  if (head === null || !head.next) return head

  const reversed = reverseList(head.next)!

  head.next.next = head
  head.next = null

  return reversed
}

export const reverseList1 = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null
  let cur: ListNode | null = head
  let next: ListNode | null = null

  while (cur) {
    next = cur.next

    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
