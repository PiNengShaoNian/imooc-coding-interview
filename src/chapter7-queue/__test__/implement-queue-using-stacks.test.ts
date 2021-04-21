import { MyQueue } from '../implement-queue-using-stacks'

test('MyQueue', () => {
  const queue = new MyQueue()

  queue.push(1)
  queue.push(2)
  queue.push(3)

  expect(queue.empty()).toBeFalsy()

  expect(queue.peek()).toBe(1)
  expect(queue.pop()).toBe(1)
  expect(queue.empty()).toBeFalsy()

  expect(queue.peek()).toBe(2)
  expect(queue.pop()).toBe(2)
  expect(queue.empty()).toBeFalsy()

  expect(queue.peek()).toBe(3)
  expect(queue.pop()).toBe(3)

  expect(queue.empty()).toBeTruthy()
})
