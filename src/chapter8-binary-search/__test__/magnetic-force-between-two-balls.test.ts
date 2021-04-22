import { maxDistance } from '../magnetic-force-between-two-balls'

test('maxDistance', () => {
  expect(maxDistance([1, 2, 3, 4, 7], 3)).toBe(3)
  expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)).toBe(999999999)
})
