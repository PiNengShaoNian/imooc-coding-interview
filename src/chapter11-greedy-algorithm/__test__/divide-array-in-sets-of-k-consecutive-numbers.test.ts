import { isPossibleDivide } from '../divide-array-in-sets-of-k-consecutive-numbers'

test('isPossibleDivide', () => {
  expect(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4)).toBeTruthy()
  expect(
    isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)
  ).toBeTruthy()
  expect(isPossibleDivide([3, 3, 2, 2, 1, 1], 3)).toBeTruthy()
  expect(isPossibleDivide([1, 2, 3, 4], 3)).toBeFalsy()
})
