import { RecentCounter } from '../number-of-recent-calls'

test('RecentCounter', () => {
  const counter = new RecentCounter()
  expect(counter.ping(1)).toBe(1)
  expect(counter.ping(100)).toBe(2)
  expect(counter.ping(3001)).toBe(3)
  expect(counter.ping(3002)).toBe(3)
  expect(counter.ping(3003)).toBe(4)
  expect(counter.ping(3004)).toBe(5)
  expect(counter.ping(3005)).toBe(6)
  expect(counter.ping(3100)).toBe(7)
  expect(counter.ping(3101)).toBe(7)
})
