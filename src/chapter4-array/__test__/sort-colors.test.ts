import { sortColors, sortColors1 } from '../sort-colors'

test('sortColors', () => {
  const arr1 = [2, 0, 2, 1, 1, 0]
  const arr2 = [2, 0, 2, 1, 1, 0]

  sortColors(arr1)

  sortColors1(arr2)

  expect(arr1).toEqual([0, 0, 1, 1, 2, 2])
  expect(arr2).toEqual([0, 0, 1, 1, 2, 2])
})
