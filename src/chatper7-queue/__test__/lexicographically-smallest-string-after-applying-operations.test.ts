import { findLexSmallestString } from '../lexicographically-smallest-string-after-applying-operations'

test('findLexSmallestString', () => {
  expect(findLexSmallestString('5525', 9, 2)).toBe('2050')

  expect(findLexSmallestString('74', 5, 1)).toBe('24')
  expect(findLexSmallestString('0011', 4, 2)).toBe('0011')
  expect(findLexSmallestString('43987654', 7, 3)).toBe('00553311')
})
