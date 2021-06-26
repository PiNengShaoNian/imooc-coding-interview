export function rob(nums: number[]): number {
  const dp: number[] = Array.from({ length: nums.length + 1 }, () => 0)

  for (let i = 1; i <= nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1], (i - 2 >= 0 ? dp[i - 2] : 0) + nums[i - 1])
  }

  return dp[nums.length]
}
