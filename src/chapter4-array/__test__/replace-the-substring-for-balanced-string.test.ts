import { balancedString } from '../replace-the-substring-for-balanced-string'

test('balancedString', () => {
  expect(balancedString('QWER')).toBe(0)
  expect(balancedString('QQWE')).toBe(1)
  expect(balancedString('QQQW')).toBe(2)
  expect(balancedString('QQQQ')).toBe(3)
  expect(balancedString('QQQQQQQQ')).toBe(6)
  expect(balancedString('QQQQWWWW')).toBe(4)
  expect(balancedString('QQQQWWWWEEEE')).toBe(6)
  expect(balancedString('QQQWWWEEEEEE')).toBe(3)
})
