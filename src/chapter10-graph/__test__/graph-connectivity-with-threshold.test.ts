import { areConnected } from '../graph-connectivity-with-threshold'

test('areConnected', () => {
  expect(
    areConnected(6, 2, [
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  ).toEqual([false, false, true])
  expect(
    areConnected(6, 0, [
      [4, 5],
      [3, 4],
      [3, 2],
      [2, 6],
      [1, 3],
    ])
  ).toEqual([true, true, true, true, true])
  expect(
    areConnected(5, 1, [
      [4, 5],
      [4, 5],
      [3, 2],
      [2, 3],
      [3, 4],
    ])
  ).toEqual([false, false, false, false, false])
})
