export const canPartitionKSubsets = (nums: number[], k: number): boolean => {
  let sum = 0
  for (let i = 0; i < nums.length; ++i) sum += nums[i]

  if (!Number.isInteger(sum / k)) return false

  const target = sum / k
  let row = nums.length - 1
  nums.sort((a, b) => a - b)

  if (nums[row] > target) return false

  while (row >= 0 && nums[row] === target) {
    --row
    --k
  }

  if (k === 0) return true

  const search = (
    groups: number[],
    nums: number[],
    row: number,
    target: number
  ): boolean => {
    if (row < 0) return true

    const v = nums[row--]
    for (let i = 0; i < groups.length; ++i) {
      if (groups[i] + v <= target) {
        groups[i] += v

        if (search(groups, nums, row, target)) return true

        groups[i] -= v
      }

      if (groups[i] === 0) break
    }

    return false
  }

  return search(
    Array.from({ length: k }, () => 0),
    nums,
    row,
    target
  )
}
