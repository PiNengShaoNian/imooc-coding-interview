import { buildArray } from '../build-an-array-with-stack-operations'

test('buildArray', () => {
  expect(buildArray([1, 3], 3)).toEqual(['Push', 'Push', 'Pop', 'Push'])
  expect(buildArray([1, 2, 3], 3)).toEqual(['Push', 'Push', 'Push'])
  expect(buildArray([1, 2], 4)).toEqual(['Push', 'Push'])
  expect(buildArray([2, 3, 4], 4)).toEqual([
    'Push',
    'Pop',
    'Push',
    'Push',
    'Push',
  ])
})
