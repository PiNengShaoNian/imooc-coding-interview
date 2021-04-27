import { getHappyString } from '../the-k-th-lexicographical-string-of-all-happy-strings-of-length-n'

test('getHappyString', () => {
  expect(getHappyString(1, 3)).toBe('c')
  expect(getHappyString(1, 4)).toBe('')
  expect(getHappyString(3, 9)).toBe('cab')
  expect(getHappyString(2, 7)).toBe('')
  expect(getHappyString(10, 100)).toBe('abacbabacb')
})
