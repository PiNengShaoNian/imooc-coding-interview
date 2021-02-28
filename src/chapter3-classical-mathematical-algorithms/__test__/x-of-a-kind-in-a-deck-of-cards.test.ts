import { hasGroupsSizeX } from '../x-of-a-kind-in-a-deck-of-cards'

test('能求出分组大小', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBeTruthy()
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBeFalsy()
  expect(hasGroupsSizeX([1])).toBeFalsy()
  expect(hasGroupsSizeX([1, 1])).toBeTruthy()
  expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBeTruthy()
})
