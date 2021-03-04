import { tribonacci } from '../n-th-tribonacci-number'

test('能求出泰波那契数', () => {
  expect(tribonacci(0)).toBe(0)
  expect(tribonacci(1)).toBe(1)
  expect(tribonacci(2)).toBe(1)
  expect(tribonacci(4)).toBe(4)
  expect(tribonacci(25)).toBe(1389537)
})
