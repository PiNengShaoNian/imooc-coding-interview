import { subarraysWithKDistinct } from '../subarrays-with-k-different-integers'

test('subarraysWithKDistinct', () => {
  expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toBe(7)
  expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toBe(3)
})
