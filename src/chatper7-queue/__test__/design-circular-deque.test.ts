import { MyCircularDeque } from '../design-circular-deque'

test('MyCircularDeque', () => {
  const queue = new MyCircularDeque(3)
  expect(queue.insertLast(1)).toBeTruthy()
  expect(queue.insertLast(2)).toBeTruthy()
  expect(queue.insertFront(3)).toBeTruthy()
  expect(queue.insertFront(4)).toBeFalsy()
  expect(queue.getRear()).toBe(2)
  expect(queue.isFull()).toBeTruthy()
  expect(queue.deleteLast()).toBeTruthy()
  expect(queue.insertFront(4)).toBeTruthy()
  expect(queue.getFront()).toBe(4)
})
