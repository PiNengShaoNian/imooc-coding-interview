import { findTheDifference } from '../find-the-difference'

test('findTheDifference', () => {
  expect(findTheDifference('abcd', 'abcde')).toBe('e')
  expect(findTheDifference('', 'y')).toBe('y')
  expect(findTheDifference('a', 'aa')).toBe('a')
  expect(findTheDifference('ae', 'aea')).toBe('a')
})
