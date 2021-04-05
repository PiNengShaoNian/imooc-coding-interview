import { buildLinkedList } from '../LinkedList'
import { reverseKGroup } from '../reverse-nodes-in-k-group'

test('reverseKGroup', () => {
  expect([...reverseKGroup(buildLinkedList([1, 2, 3, 4, 5]), 2)!]).toEqual([
    2,
    1,
    4,
    3,
    5,
  ])
  expect([...reverseKGroup(buildLinkedList([1, 2, 3, 4, 5]), 3)!]).toEqual([
    3,
    2,
    1,
    4,
    5,
  ])
  expect([...reverseKGroup(buildLinkedList([1, 2, 3, 4, 5]), 1)!]).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
  expect([...reverseKGroup(buildLinkedList([1]), 1)!]).toEqual([1])
})
