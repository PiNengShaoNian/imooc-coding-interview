import { minimumEffort } from '../minimum-initial-energy-to-finish-tasks'

test('minimumEffort', () => {
  expect(
    minimumEffort([
      [1, 2],
      [2, 4],
      [4, 8],
    ])
  ).toBe(8)

  expect(
    minimumEffort([
      [1, 3],
      [2, 4],
      [10, 11],
      [10, 12],
      [8, 9],
    ])
  ).toBe(32)

  expect(
    minimumEffort([
      [1, 7],
      [2, 8],
      [3, 9],
      [4, 10],
      [5, 11],
      [6, 12],
    ])
  ).toBe(27)
})
