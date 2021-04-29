import {
  findBestValue,
  lowerBound,
} from '../sum-of-mutated-array-closest-to-target'

test('lowerBound', () => {
  const arr = [1, 3, 5, 5, 5, 7, 9]

  expect(lowerBound(arr, 1)).toBe(0)
  expect(lowerBound(arr, 1.5)).toBe(1)
  expect(lowerBound(arr, 3.5)).toBe(2)
  expect(lowerBound(arr, 5.5)).toBe(5)
  expect(lowerBound(arr, 10)).toBe(7)

  expect(findBestValue([4, 9, 3], 10)).toBe(3)
  expect(findBestValue([2, 3, 5], 10)).toBe(5)
  expect(findBestValue([60864, 25176, 27249, 21296, 20204], 56803)).toBe(11361)
})
