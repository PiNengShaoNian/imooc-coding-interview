import { maxPerformance } from '../maximum-performance-of-a-team'

test('maxPerformance', () => {
  expect(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2)).toBe(60)
  expect(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3)).toBe(68)
  expect(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3)).toBe(68)
  expect(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4)).toBe(72)
})
