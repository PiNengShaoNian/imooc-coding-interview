import { deleteNodes } from '../deleteNodes'
import { buildLinkedList } from '../LinkedList'

test('deleteNodes', () => {
  expect([
    ...deleteNodes(
      buildLinkedList(Array.from({ length: 13 }, (_, i) => i + 1)),
      2,
      3
    )!,
  ]).toEqual([1, 2, 6, 7, 11, 12])

  expect([
    ...deleteNodes(
      buildLinkedList(Array.from({ length: 11 }, (_, i) => i + 1)),
      1,
      3
    )!,
  ]).toEqual([1, 5, 9])

  expect([
    ...deleteNodes(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 3, 1)!,
  ]).toEqual([1, 2, 3, 5, 6, 7, 9, 10, 11])

  expect([
    ...deleteNodes(buildLinkedList([9, 3, 7, 7, 9, 10, 8, 2]), 1, 2)!,
  ]).toEqual([9, 7, 8])
})
