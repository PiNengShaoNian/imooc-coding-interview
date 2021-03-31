export function missingNumber(nums: number[]): number {
  let ans = 0

  for (let i = 1; i <= nums.length; ++i) {
    ans += i
    ans -= nums[i - 1]
  }

  return ans
}
