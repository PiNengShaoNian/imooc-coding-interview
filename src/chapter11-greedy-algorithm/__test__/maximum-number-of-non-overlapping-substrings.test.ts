import { maxNumOfSubstrings } from '../maximum-number-of-non-overlapping-substrings'

test('maxNumOfSubstrings', () => {
  expect(maxNumOfSubstrings('adefaddaccc')).toEqual(['e', 'f', 'ccc'])
  expect(maxNumOfSubstrings('abbaccd')).toEqual(['bb', 'cc', 'd'])
  expect(maxNumOfSubstrings('a')).toEqual(['a'])
})
