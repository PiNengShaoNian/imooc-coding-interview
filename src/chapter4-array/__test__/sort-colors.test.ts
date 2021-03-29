import { sortColors } from '../sort-colors'

test('sortColors', () => {
  const arr1 = [2, 0, 2, 1, 1, 0]

  sortColors(arr1)

  expect(arr1).toEqual([0, 0, 1, 1, 2, 2])
})
