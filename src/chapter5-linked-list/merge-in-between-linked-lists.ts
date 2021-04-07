import { ListNode } from './LinkedList'

export const mergeInBetween = (
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null => {
  let left = list1

  for (let i = 1; i < a; ++i) {
    left = left!.next
  }

  let tobeDelete = left!.next

  for (let i = 0; i < b - a + 1; ++i) {
    const temp = tobeDelete
    tobeDelete = tobeDelete!.next
    temp!.next = null
  }

  let list2Tail = list2

  for (; list2Tail && list2Tail.next; list2Tail = list2Tail.next);

  if (list2) {
    left!.next = list2
    list2Tail!.next = tobeDelete
    return list1
  } else {
    left!.next = tobeDelete
    return list1
  }
}
