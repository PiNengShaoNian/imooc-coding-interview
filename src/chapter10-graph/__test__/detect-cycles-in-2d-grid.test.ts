import { containsCycle } from '../detect-cycles-in-2d-grid'
test('containsCycle ', () => {
  expect(
    containsCycle([
      ['a', 'a', 'a', 'a'],
      ['a', 'b', 'b', 'a'],
      ['a', 'b', 'b', 'a'],
      ['a', 'a', 'a', 'a'],
    ])
  ).toBeTruthy()
  expect(
    containsCycle([
      ['c', 'c', 'c', 'a'],
      ['c', 'd', 'c', 'c'],
      ['c', 'c', 'e', 'c'],
      ['f', 'c', 'c', 'c'],
    ])
  ).toBeTruthy()
  expect(
    containsCycle([
      ['a', 'b', 'b'],
      ['b', 'z', 'b'],
      ['b', 'b', 'a'],
    ])
  ).toBeFalsy()
})
