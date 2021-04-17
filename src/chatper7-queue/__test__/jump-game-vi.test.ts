import { maxResult } from '../jump-game-vi'

test('maxResult', () => {
  expect(maxResult([1, -1, -2, 4, -7, 3], 2)).toBe(7)
  expect(maxResult([10, -5, -2, 4, 0, 3], 3)).toBe(17)
  expect(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2)).toBe(0)
})
