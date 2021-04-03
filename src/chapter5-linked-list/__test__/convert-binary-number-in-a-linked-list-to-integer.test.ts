import { getDecimalValue } from '../convert-binary-number-in-a-linked-list-to-integer'
import { buildLinkedList } from '../LinkedList'

test('getDecimalValue', () => {
  expect(getDecimalValue(buildLinkedList([1, 0, 1]))).toBe(5)
  expect(getDecimalValue(buildLinkedList([0]))).toBe(0)
  expect(getDecimalValue(buildLinkedList([1]))).toBe(1)
  expect(
    getDecimalValue(
      buildLinkedList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
    )
  ).toBe(18880)
  expect(getDecimalValue(buildLinkedList([0, 0]))).toBe(0)
})
