import { findDuplicateNums } from '../find-duplicate-nums'

test('findDuplicateNums', () => {
  const arr1 = [1, 2, 3, 1, 2, 3, 4]

  expect(findDuplicateNums(arr1)).toEqual([1, 2, 3])
})
