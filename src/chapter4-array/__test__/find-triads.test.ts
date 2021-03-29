import { findTriads } from '../find-triads'

test('findTriads', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [3, 2, 3]
  const arr3 = [3, 2, 1]
  const arr4 = [2, 1, 5, 2, 7]
  const arr5 = [2, 1, 5, 2]

  expect(findTriads(arr1)).toBeTruthy()
  expect(findTriads(arr2)).toBeFalsy()
  expect(findTriads(arr3)).toBeFalsy()
  expect(findTriads(arr4)).toBeTruthy()
  expect(findTriads(arr5)).toBeFalsy()
})
