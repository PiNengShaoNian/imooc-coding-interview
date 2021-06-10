export function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => a - b)

  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]
  }

  const ans: number[] = []
  for (let cur = 0, i = nums.length - 1; sum - cur >= cur; --i) {
    cur += nums[i]
    ans.push(nums[i])
  }

  return ans
}
