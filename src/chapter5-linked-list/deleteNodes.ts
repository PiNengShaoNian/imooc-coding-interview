import { ListNode } from './LinkedList'

export const deleteNodes = (
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null => {
  if (head === null) return head

  let start: ListNode | null = head
  for (let i = 1; i < m && start; ++i, start = start.next);

  if (!start) return head

  let toBeDelete = start.next
  for (let i = 0; i < n && toBeDelete; ++i) {
    const temp = toBeDelete
    toBeDelete = toBeDelete.next
    temp.next = null
  }

  start.next = toBeDelete
  deleteNodes(toBeDelete, m, n)

  return head
}
