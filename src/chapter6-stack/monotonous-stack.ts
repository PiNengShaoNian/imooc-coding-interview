export const getSequence = (nums: number[]): number[] => {
  const stack: number[] = []
  const ans: number[] = []
  for (let i = nums.length - 1; i >= 0; --i) {
    for (; stack.length && stack[stack.length - 1] <= nums[i]; stack.pop());
    ans[i] = stack.length ? stack[stack.length - 1] : nums[i]
    stack.push(nums[i])
  }

  return ans
}
