import { singleNumber } from '../single-number-ii'

test('singleNumber', () => {
  expect(singleNumber([2, 2, 3, 2])).toBe(3)
  expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99)
  expect(singleNumber([1])).toBe(1)
  expect(singleNumber([1, 2, 2, 2])).toBe(1)
})
