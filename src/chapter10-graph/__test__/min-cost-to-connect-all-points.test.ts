import { minCostConnectPoints } from '../min-cost-to-connect-all-points'

test('minCostConnectPoints', () => {
  expect(
    minCostConnectPoints([
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ])
  ).toBe(20)
  expect(
    minCostConnectPoints([
      [3, 12],
      [-2, 5],
      [-4, 1],
    ])
  ).toBe(18)
  expect(
    minCostConnectPoints([
      [0, 0],
      [1, 1],
      [1, 0],
      [-1, 1],
    ])
  ).toBe(4)
  expect(
    minCostConnectPoints([
      [-1000000, -1000000],
      [1000000, 1000000],
    ])
  ).toBe(4000000)
  expect(minCostConnectPoints([[0, 0]])).toBe(0)
 
  expect(
    minCostConnectPoints([
      [7, 18],
      [-15, 19],
      [-18, -15],
      [-7, 14],
      [4, 1],
      [-6, 3],
    ])
  ).toBe(85)
})
