import { Deque } from '../util/deque'

export const maxResult = (nums: number[], k: number): number => {
  const deque = new Deque<number>()

  for (let i = 0, last = 0; i < nums.length; ++i) {
    if (deque.size() && deque.front()! <= i - k) deque.removeFront()

    nums[i] += last
    while (deque.size() && nums[deque.tail()!] <= nums[i]) deque.removeLast()

    deque.addLast(i)
    last = nums[deque.front()!]
  }

  return nums[nums.length - 1]
}
