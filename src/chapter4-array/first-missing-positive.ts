export const firstMissingPositive = (nums: number[]): number => {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    const index = Math.abs(nums[i]) - 1

    if (index < nums.length) {
      nums[index] = -Math.abs(nums[index])
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) return i + 1
  }

  return nums.length + 1
}
