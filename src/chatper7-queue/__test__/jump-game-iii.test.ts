import { canReach } from '../jump-game-iii'

test('canReach', () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBeTruthy()
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBeTruthy()
  expect(canReach([3, 0, 2, 1, 2], 2)).toBeFalsy()
})
