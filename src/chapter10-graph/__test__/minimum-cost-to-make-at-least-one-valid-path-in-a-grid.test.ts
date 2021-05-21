import { minCost } from '../minimum-cost-to-make-at-least-one-valid-path-in-a-grid'

test('minCost', () => {
  expect(
    minCost([
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [1, 1, 1, 1],
      [2, 2, 2, 2],
    ])
  ).toBe(3)
  expect(
    minCost([
      [1, 1, 3],
      [3, 2, 2],
      [1, 1, 4],
    ])
  ).toBe(0)
  expect(
    minCost([
      [1, 2],
      [4, 3],
    ])
  ).toBe(1)
  expect(
    minCost([
      [2, 2, 2],
      [2, 2, 2],
    ])
  ).toBe(3)
  expect(minCost([[4]])).toBe(0)
})
