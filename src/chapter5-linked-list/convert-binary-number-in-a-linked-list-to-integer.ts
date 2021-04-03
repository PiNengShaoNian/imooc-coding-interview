import { ListNode } from './LinkedList'

export const getDecimalValue = (head: ListNode | null): number => {
  let ans = 0

  for (; head !== null; head = head?.next ?? null) {
    ans = (ans << 1) | head.val
  }

  return ans
}
