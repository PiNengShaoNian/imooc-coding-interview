import { reversePairs } from '../reverse-pairs'

test('reversePairs', () => {
  expect(reversePairs([1, 3, 2, 3, 1])).toBe(2)
  expect(reversePairs([2, 4, 3, 5, 1])).toBe(3)
})
