import { ListNode } from './LinkedList'

export const deleteNode = (root: ListNode | null): void => {
  if (!root) return

  root.val = root.next!.val
  root.next = root.next!.next
}
