import { smallestDivisor } from '../find-the-smallest-divisor-given-a-threshold'

test('smallestDivisor', () => {
  expect(smallestDivisor([1, 2, 5, 9], 6)).toBe(5)
  expect(smallestDivisor([2, 3, 5, 7, 11], 11)).toBe(3)
  expect(smallestDivisor([19], 5)).toBe(4)
})
