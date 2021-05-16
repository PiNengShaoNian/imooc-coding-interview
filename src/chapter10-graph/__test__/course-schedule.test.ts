import { canFinish } from '../course-schedule'

test('canFinish', () => {
  expect(canFinish(2, [[1, 0]])).toBeTruthy()
  expect(
    canFinish(2, [
      [1, 0],
      [0, 1],
    ])
  ).toBeFalsy()
})
