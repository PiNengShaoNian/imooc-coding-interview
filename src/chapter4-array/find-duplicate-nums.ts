export const findDuplicateNums = (nums: number[]): number[] => {
  const ans: number[] = []

  for (let i = 0; i < nums.length; ++i) {
    const index = Math.abs(nums[i]) - 1

    if (nums[index] < 0) {
      ans.push(index + 1)
    }

    nums[index] = -nums[index]
  }

  return ans
}
