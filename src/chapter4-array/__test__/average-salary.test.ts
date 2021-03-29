import { average } from '../average-salary'

test('average', () => {
  expect(average([1000, 2000, 3000])).toBe(2000)
  expect(average([6000, 5000, 4000, 3000, 2000, 1000])).toBe(3500)
  expect(average([8000, 9000, 2000, 3000, 6000, 1000])).toBe(4750)
})
