import { buildLinkedList, ListNode } from '../LinkedList'
import { mergeTwoLists } from '../merge-two-sorted-lists'

test('mergeTwoLists', () => {
  expect([
    ...mergeTwoLists(buildLinkedList([1, 2, 4]), buildLinkedList([1, 3, 4]))!,
  ]).toEqual([1, 1, 2, 3, 4, 4])
  expect(mergeTwoLists(null, null)).toEqual(null)
  expect(mergeTwoLists(null, new ListNode(0))).toEqual(new ListNode(0))
})
