import { hasValidPath } from '../check-if-there-is-a-valid-path-in-a-grid'

test('hasValidPath', () => {
  expect(
    hasValidPath([
      [2, 4, 3],
      [6, 5, 2],
    ])
  ).toBeTruthy()
  expect(
    hasValidPath([
      [1, 2, 1],
      [1, 2, 1],
    ])
  ).toBeFalsy()
  expect(hasValidPath([[1, 1, 2]])).toBeFalsy()
  expect(hasValidPath([[1, 1, 1, 1, 1, 1, 3]])).toBeTruthy()
  expect(hasValidPath([[2], [2], [2], [2], [2], [2], [6]])).toBeTruthy()
})
