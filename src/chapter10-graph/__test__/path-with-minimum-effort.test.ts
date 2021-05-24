import { minimumEffortPath } from '../path-with-minimum-effort'
import { minimumEffortPath as minimumEffortPath1 } from '../path-with-minimum-effort1'

test('minimumEffortPath ', () => {
  expect(
    minimumEffortPath([
      [1, 2, 2],
      [3, 8, 2],
      [5, 3, 5],
    ])
  ).toBe(2)
  expect(
    minimumEffortPath1([
      [1, 2, 2],
      [3, 8, 2],
      [5, 3, 5],
    ])
  ).toBe(2)
  expect(
    minimumEffortPath([
      [1, 2, 3],
      [3, 8, 4],
      [5, 3, 5],
    ])
  ).toBe(1)
  expect(
    minimumEffortPath1([
      [1, 2, 3],
      [3, 8, 4],
      [5, 3, 5],
    ])
  ).toBe(1)
  expect(
    minimumEffortPath([
      [1, 2, 1, 1, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 1, 1, 2, 1],
    ])
  ).toBe(0)
  expect(
    minimumEffortPath1([
      [1, 2, 1, 1, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1],
      [1, 1, 1, 2, 1],
    ])
  ).toBe(0)
})
