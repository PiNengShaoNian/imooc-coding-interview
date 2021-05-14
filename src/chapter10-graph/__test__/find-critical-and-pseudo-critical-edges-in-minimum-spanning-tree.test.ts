import { findCriticalAndPseudoCriticalEdges } from '../find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree'

test('findCriticalAndPseudoCriticalEdges', () => {
  expect(
    findCriticalAndPseudoCriticalEdges(5, [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 2],
      [0, 3, 2],
      [0, 4, 3],
      [3, 4, 3],
      [1, 4, 6],
    ])
  ).toEqual([
    [0, 1],
    [2, 3, 4, 5],
  ])
  expect(
    findCriticalAndPseudoCriticalEdges(4, [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 1],
      [0, 3, 1],
    ])
  ).toEqual([[], [0, 1, 2, 3]])
})
