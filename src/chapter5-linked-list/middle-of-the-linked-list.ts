import { ListNode } from './LinkedList'

export const middleNode = (head: ListNode | null): ListNode | null => {
  for (
    let temp = head;
    temp && temp.next;
    temp = temp.next.next, head = head!.next
  );

  return head
}
