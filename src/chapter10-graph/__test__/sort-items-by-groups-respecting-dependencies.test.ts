import { sortItems } from '../sort-items-by-groups-respecting-dependencies'

test('sortItems', () => {
  expect(
    sortItems(
      8,
      2,
      [-1, -1, 1, 0, 0, 1, 0, -1],
      [[], [6], [5], [6], [3, 6], [], [], []]
    )
  ).toEqual([5, 2, 6, 3, 4, 0, 7, 1])
  expect(
    sortItems(
      8,
      2,
      [-1, -1, 1, 0, 0, 1, 0, -1],
      [[], [6], [5], [6], [3], [], [4], []]
    )
  ).toEqual([])
})
