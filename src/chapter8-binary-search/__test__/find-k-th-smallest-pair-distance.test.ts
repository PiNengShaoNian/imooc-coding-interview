import { smallestDistancePair } from '../find-k-th-smallest-pair-distance'

test('smallestDistancePair', () => {
  expect(smallestDistancePair([1, 3, 1], 1)).toBe(0)
  expect(smallestDistancePair([1, 2, 3], 1)).toBe(1)
  expect(smallestDistancePair([1, 3, 7], 1)).toBe(2)
  expect(smallestDistancePair([1, 3, 7], 2)).toBe(4)
})
