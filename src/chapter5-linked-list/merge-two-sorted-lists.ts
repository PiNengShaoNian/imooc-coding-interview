import { ListNode } from './LinkedList'

export const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const dummy = new ListNode(-1)

  let tail: ListNode = dummy
  while (l1 || l2) {
    if (!l1 && l2) {
      tail.next = l2
      break
    } else if (!l2 && l1) {
      tail.next = l1
      break
    } else if (l1!.val > l2!.val) {
      tail.next = l2
      tail = l2!
      l2 = l2!.next
      tail.next = null
    } else {
      tail.next = l1
      tail = l1!
      l1 = l1!.next
      tail.next = null
    }
  }

  return dummy.next
}
