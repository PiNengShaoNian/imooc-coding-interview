import { detectCycle } from '../linked-list-cycle-ii'
import { buildLinkedList, ListNode } from '../LinkedList'

const findNodeByVal = (head: ListNode, target: number): ListNode => {
  for (let node: ListNode | null = head; node; node = node.next) {
    if (node.val === target) return node
  }

  throw new Error(`Can't find target`)
}

test('detectCycle', () => {
  const list1 = buildLinkedList([3, 2, 0, -4])
  const node2 = findNodeByVal(list1, 2)
  const node4 = findNodeByVal(list1, -4)
  expect(node2.val).toBe(2)
  expect(node4.val).toBe(-4)
  node4.next = node2

  expect(detectCycle(list1)!.val).toBe(2)

  const list2 = new ListNode(1)
  list2.next = new ListNode(2)
  list2.next.next = list2

  expect(detectCycle(list2)!.val).toBe(1)

  const list3 = new ListNode(1)

  expect(detectCycle(list3)).toBeNull()

})
