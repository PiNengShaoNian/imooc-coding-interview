import { MyCircularQueue } from '../design-circular-queue'

test('MyCircularQueue', () => {
  const queue = new MyCircularQueue(3)
  expect(queue.enQueue(1)).toBeTruthy()
  expect(queue.enQueue(2)).toBeTruthy()
  expect(queue.enQueue(3)).toBeTruthy()
  expect(queue.enQueue(4)).toBeFalsy()
  expect(queue.Rear()).toBe(3)
  expect(queue.isFull()).toBeTruthy()
  expect(queue.deQueue()).toBeTruthy()
  expect(queue.enQueue(4)).toBeTruthy()
  expect(queue.Rear()).toBe(4)
})
