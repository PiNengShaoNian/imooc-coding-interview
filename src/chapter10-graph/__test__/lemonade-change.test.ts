import { lemonadeChange } from '../lemonade-change'

test('lemonadeChange', () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBeTruthy()
  expect(lemonadeChange([5, 5, 10])).toBeTruthy()
  expect(lemonadeChange([10, 10])).toBeFalsy()
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBeFalsy()
})
