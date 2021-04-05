import { buildLinkedList, ListNode } from '../LinkedList'
import { reverseList, reverseList1 } from '../reverse-list'

test('reverseList', () => {
  expect(reverseList(buildLinkedList([1, 2, 3, 4, 5]))).toEqual(
    buildLinkedList([5, 4, 3, 2, 1])
  )

  expect(reverseList(new ListNode(1))).toEqual(new ListNode(1))
  expect(reverseList(null)).toEqual(null)
  
  expect(reverseList1(buildLinkedList([1, 2, 3, 4, 5]))).toEqual(
    buildLinkedList([5, 4, 3, 2, 1])
  )

  expect(reverseList1(new ListNode(1))).toEqual(new ListNode(1))
  expect(reverseList1(null)).toEqual(null)
})
