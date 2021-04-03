import { buildLinkedList } from '../LinkedList'
import { removeZeroSumSublists } from '../remove-zero-sum-consecutive-nodes-from-linked-list'

test('removeZeroSumSublists', () => {
  expect(removeZeroSumSublists(buildLinkedList([1, 2, -3, 3, 1]))).toEqual(
    buildLinkedList([3, 1])
  )
  expect(removeZeroSumSublists(buildLinkedList([1, 2, 3, -3, 4]))).toEqual(
    buildLinkedList([1, 2, 4])
  )
  expect(removeZeroSumSublists(buildLinkedList([1, 2, 3, -3, -2]))).toEqual(
    buildLinkedList([1])
  )
})
