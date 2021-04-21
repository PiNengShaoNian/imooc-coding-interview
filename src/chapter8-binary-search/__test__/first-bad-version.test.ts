import { solution } from '../first-bad-version'

test('solution', () => {
  expect(solution((n) => n >= 4)(5)).toBe(4)
  expect(solution((n) => n >= 10)(10)).toBe(10)
  expect(solution((n) => n >= 11)(12)).toBe(11)
  expect(solution((n) => n >= 3000)(10000)).toBe(3000)
})
