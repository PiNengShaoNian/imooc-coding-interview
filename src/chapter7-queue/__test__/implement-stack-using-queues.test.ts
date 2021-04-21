import { MyStack } from '../implement-stack-using-queues'

test('MyStack', () => {
  const stack = new MyStack()
  stack.push(1)
  stack.push(2)
  expect(stack.top()).toBe(2)
  expect(stack.pop()).toBe(2)
  expect(stack.empty()).toBeFalsy()
})
