import { singleNumber } from '../single-number-iii'

test('singleNumber', () => {
  expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([5, 3])
  expect(singleNumber([-1, 0])).toEqual([0, -1])
  expect(singleNumber([0, 1])).toEqual([0, 1])
})
