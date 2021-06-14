import { minJumps } from '../jump-game-iv'

test('minJumps', () => {
  expect(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])).toBe(3)
  expect(minJumps([7])).toBe(0)
  expect(minJumps([7, 6, 9, 6, 9, 6, 9, 7])).toBe(1)
  expect(minJumps([6, 1, 9])).toBe(2)
  expect(minJumps([11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13])).toBe(3)
})
