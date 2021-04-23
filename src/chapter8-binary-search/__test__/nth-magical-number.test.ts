import { nthMagicalNumber } from '../nth-magical-number'

test('nthMagicalNumber', () => {
  expect(nthMagicalNumber(1, 2, 3)).toBe(2)
  expect(nthMagicalNumber(4, 2, 3)).toBe(6)
  expect(nthMagicalNumber(5, 2, 4)).toBe(10)
  expect(nthMagicalNumber(3, 6, 4)).toBe(8)
  expect(nthMagicalNumber(1000000000, 40000, 40000)).toBe(999720007)
})
