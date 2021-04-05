import { buildLinkedList } from '../LinkedList'
import { reverseBetween } from '../reverse-linked-list-ii'

test('reverseBetween', () => {
  expect([...reverseBetween(buildLinkedList([1, 2, 3, 4, 5]), 2, 4)!]).toEqual([
    1,
    4,
    3,
    2,
    5,
  ])
  expect([...reverseBetween(buildLinkedList([1, 2, 3, 4, 5]), 1, 4)!]).toEqual([
    4,
    3,
    2,
    1,
    5,
  ])

  expect([...reverseBetween(buildLinkedList([5]), 1, 1)!]).toEqual([5])
  expect(reverseBetween(null, 0, 0)).toEqual(null)
})
