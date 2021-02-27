import { maxDistance } from '../magnetic-force-between-two-balls'

test('能算出最大距离', () => {
  expect(maxDistance([1, 2, 3, 4, 7], 3)).toEqual(3)
  expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)).toEqual(999999999)
})
