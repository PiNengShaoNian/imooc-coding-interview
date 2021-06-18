import {
  maxNumOfSubstrings,
  maxNumOfSubstrings1,
} from '../maximum-number-of-non-overlapping-substrings'

test('maxNumOfSubstrings', () => {
  expect(maxNumOfSubstrings('adefaddaccc')).toEqual(['e', 'f', 'ccc'])
  expect(maxNumOfSubstrings('abbaccd')).toEqual(['bb', 'cc', 'd'])
  expect(maxNumOfSubstrings('a')).toEqual(['a'])
  
  expect(maxNumOfSubstrings1('adefaddaccc')).toEqual(['e', 'f', 'ccc'])
  expect(maxNumOfSubstrings1('abbaccd')).toEqual(['bb', 'cc', 'd'])
  expect(maxNumOfSubstrings1('a')).toEqual(['a'])
})
