import { canDistribute } from '../distribute-repeating-integers'

test('canDistribute', () => {
  expect(canDistribute([1, 2, 3, 4], [2])).toBeFalsy()
  expect(canDistribute([1, 2, 3, 3], [2])).toBeTruthy()
  expect(canDistribute([1, 1, 2, 2], [2, 2])).toBeTruthy()
  expect(canDistribute([1, 1, 2, 3], [2, 2])).toBeFalsy()
  expect(canDistribute([1, 1, 1, 1, 1], [2, 3])).toBeTruthy()

  expect(
    canDistribute(
      Array.from({ length: 1e4 }, () => 0)
        .concat(Array.from({ length: 1e4 }, () => 3))
        .concat(Array.from({ length: 30000 }, () => 10)),
      [1000, 1000, 1000, 999, 10000, 30001]
    )
  ).toBeFalsy()
  expect(
    canDistribute(
      [
        1,
        2,
        3,
        4,
        4,
        ...Array.from({ length: 1e4 }, () => 5),
        ...Array.from({ length: 10 }, () => 6),
      ],
      [1, 1, 1, 2, 1e4, 5, 5]
    )
  ).toBeTruthy()
})
