import { buildLinkedList, ListNode } from '../LinkedList'
import { mergeInBetween } from '../merge-in-between-linked-lists'

test('mergeInBetween', () => {
  expect([
    ...mergeInBetween(
      buildLinkedList([0, 1, 2, 3, 4, 5]),
      3,
      4,
      buildLinkedList([1000000, 1000001, 1000002])
    )!,
  ]).toEqual([0, 1, 2, 1000000, 1000001, 1000002, 5])

  expect([
    ...mergeInBetween(
      buildLinkedList([0, 1, 2, 3, 4, 5, 6]),
      2,
      5,
      buildLinkedList([1000000, 1000001, 1000002, 1000003, 1000004])
    )!,
  ]).toEqual([0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6])

  expect([...mergeInBetween(buildLinkedList([0, 1, 3]), 1, 1, null)!]).toEqual([
    0,
    3,
  ])

  expect([
    ...mergeInBetween(buildLinkedList([0, 1, 3, 4, 5]), 1, 1, null)!,
  ]).toEqual([0, 3, 4, 5])

  expect([
    ...mergeInBetween(buildLinkedList([0, 1, 3, 4, 5]), 1, 1, new ListNode(1))!,
  ]).toEqual([0, 1, 3, 4, 5])

  expect([
    ...mergeInBetween(buildLinkedList([0, 1, 3, 4, 5]), 1, 3, new ListNode(1))!,
  ]).toEqual([0, 1, 5])
})
