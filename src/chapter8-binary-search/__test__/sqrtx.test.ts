import { mySqrt } from '../sqrtx'

test('mySqrt', () => {
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(8)).toBe(2)
  expect(mySqrt(1)).toBe(1)
})
