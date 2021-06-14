import { minDays } from '../minimum-number-of-days-to-disconnect-island'

test('minDays', () => {
  expect(
    minDays([
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(2)
  expect(minDays([[1, 1]])).toBe(2)
  expect(minDays([[1, 0, 1, 0]])).toBe(0)
  expect(
    minDays([
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
    ])
  ).toBe(1)
  expect(
    minDays([
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ])
  ).toBe(2)

  expect(
    minDays([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(1)
})
