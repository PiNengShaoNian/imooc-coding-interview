import { Deque } from '../util/deque'

export const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const deque = new Deque<number>()

  const ans: number[] = Array.from({ length: nums.length - k + 1 })
  for (let i = 0; i < nums.length; ++i) {
    if (!deque.isEmpty() && deque.front()! <= i - k) deque.removeFront()

    while (!deque.isEmpty() && nums[deque.tail()!] <= nums[i])
      deque.removeLast()

    deque.addLast(i)
    if (i >= k - 1) ans[i - k + 1] = nums[deque.front()!]
  }

  return ans
}
