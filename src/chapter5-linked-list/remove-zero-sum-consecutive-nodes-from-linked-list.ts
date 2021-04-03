import { ListNode } from './LinkedList'

export function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head)

  const preSum: Map<number, ListNode> = new Map()
  preSum.set(0, dummy)
  let sum = 0
  for (; head !== null; head = head.next) {
    sum += head.val

    const temp = preSum.get(sum)

    if (temp !== undefined) {
      for (
        let s = sum;
        temp.next !== head;
        preSum.delete((s += temp.next!.val)), temp.next = temp!.next!.next
      );
      temp!.next = temp!.next!.next
    } else {
      preSum.set(sum, head)
    }
  }

  return dummy.next
}
