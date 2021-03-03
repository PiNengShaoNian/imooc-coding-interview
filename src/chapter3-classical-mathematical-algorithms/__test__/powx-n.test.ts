import { myPow } from '../powx-n'

test('能正确的求出幂', () => {
  expect(myPow(2, 10)).toBeCloseTo(1024.0)
  expect(myPow(2.1, 3)).toBeCloseTo(9.261)
  expect(myPow(2.0, -2)).toBeCloseTo(0.25)
  expect(myPow(2.0, -2147483648)).toBeCloseTo(0.0)
})
