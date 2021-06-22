export const missingNumber = (nums: number[]): number => {
  let ans = 0

  for (let i = 0; i < nums.length; ++i) {
    ans ^= i
    ans ^= nums[i]
  }

  ans ^= nums.length

  return ans
}
