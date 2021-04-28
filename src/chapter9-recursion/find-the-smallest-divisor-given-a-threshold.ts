export const smallestDivisor = (nums: number[], threshold: number): number => {
  let left = 1
  let right = 10 ** 6

  while (left <= right) {
    const mid = (left + right) >> 1

    let reaming = threshold

    for (let i = 0; i < nums.length; ++i) {
      reaming -= Math.ceil(nums[i] / mid)
    }

    if (reaming >= 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
