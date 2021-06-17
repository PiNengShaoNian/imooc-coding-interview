import { isPowerOfFour } from '../power-of-four'

test('isPowerOfFour', () => {
  expect(isPowerOfFour(16)).toBeTruthy()
  expect(isPowerOfFour(5)).toBeFalsy()
  expect(isPowerOfFour(1)).toBeTruthy()
})
