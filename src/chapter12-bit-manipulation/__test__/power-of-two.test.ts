import { isPowerOfTwo } from '../power-of-two'

test('isPowerOfTwo', () => {
  expect(isPowerOfTwo(1)).toBeTruthy()
  expect(isPowerOfTwo(16)).toBeTruthy()
  expect(isPowerOfTwo(3)).toBeFalsy()
  expect(isPowerOfTwo(4)).toBeTruthy()
  expect(isPowerOfTwo(5)).toBeFalsy()
})
