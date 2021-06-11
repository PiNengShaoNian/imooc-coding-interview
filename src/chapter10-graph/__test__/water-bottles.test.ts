import { numWaterBottles } from '../water-bottles'

test('numWaterBottles', () => {
  expect(numWaterBottles(9, 3)).toBe(13)
  expect(numWaterBottles(15, 4)).toBe(19)
  expect(numWaterBottles(5, 5)).toBe(6)
  expect(numWaterBottles(2, 3)).toBe(2)
})
