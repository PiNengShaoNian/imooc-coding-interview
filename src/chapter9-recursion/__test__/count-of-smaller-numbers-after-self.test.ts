import { countSmaller } from '../count-of-smaller-numbers-after-self'

test('countSmaller', () => {
  expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0])
  expect(countSmaller([5, 2, 1, 1])).toEqual([3, 2, 0, 0])
  expect(countSmaller([5])).toEqual([0])
  expect(countSmaller([1, 2, 3, 4])).toEqual([0, 0, 0, 0])
  expect(countSmaller([1, 1, 1])).toEqual([0, 0, 0])
  expect(countSmaller([3, 1, 1, 1])).toEqual([3, 0, 0, 0])
  expect(countSmaller([3, 1, 0, 1])).toEqual([3, 1, 0, 0])
})
