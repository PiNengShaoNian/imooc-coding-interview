import { getSequence } from '../monotonous-stack'

test('monotonous-stack', () => {
  expect(getSequence([1, 4, 3, 2, 6, 5])).toEqual([4, 6, 6, 6, 6, 5])
})
