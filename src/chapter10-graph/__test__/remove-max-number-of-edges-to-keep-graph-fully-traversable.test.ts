import { maxNumEdgesToRemove } from '../remove-max-number-of-edges-to-keep-graph-fully-traversable'

test('maxNumEdgesToRemove', () => {
  expect(
    maxNumEdgesToRemove(4, [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 3],
      [1, 2, 4],
      [1, 1, 2],
      [2, 3, 4],
    ])
  ).toBe(2)
  expect(
    maxNumEdgesToRemove(4, [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 4],
      [2, 1, 4],
    ])
  ).toBe(0)
  expect(
    maxNumEdgesToRemove(4, [
      [3, 2, 3],
      [1, 1, 2],
      [2, 3, 4],
    ])
  ).toBe(-1)
})
