import { minFlips } from '../minimum-flips-to-make-a-or-b-equal-to-c'

test('minFlips', () => {
  expect(minFlips(2, 6, 5)).toBe(3)
  expect(minFlips(4, 2, 7)).toBe(1)
  expect(minFlips(1, 2, 3)).toBe(0)
})
