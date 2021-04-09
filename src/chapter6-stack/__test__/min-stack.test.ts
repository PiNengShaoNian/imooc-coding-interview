import { MinStack } from '../min-stack'

test('MinStack', () => {
  const stack = new MinStack()
  stack.push(-2)
  stack.push(0)
  stack.push(-3)

  expect(stack.getMin()).toBe(-3)
  stack.pop()
  expect(stack.top()).toBe(0)
  expect(stack.getMin()).toBe(-2)

  expect(stack.size()).toBe(2)

  stack.push(-2)
  expect(stack.getMin()).toBe(-2)
  expect(stack.size()).toBe(3)
  stack.push(-1)
  expect(stack.getMin()).toBe(-2)
})
