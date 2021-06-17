import { getSum } from '../sum-of-two-integers'

test('getSum', () => {
  expect(getSum(1, 2)).toBe(3)
  expect(getSum(-2, 3)).toBe(1)
})
