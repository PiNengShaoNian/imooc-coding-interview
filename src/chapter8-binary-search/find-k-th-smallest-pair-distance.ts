export function smallestDistancePair(nums: number[], k: number): number {
  let left = 0
  let right = 1000000

  nums.sort((a, b) => a - b)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    let count = 0

    let l = 0,
      r = -1

    while (l < nums.length && count < k) {
      if (r + 1 >= nums.length) break

      ++r
      while (nums[r] - nums[l] > mid) ++l

      count += r - l
    }

    if (count >= k) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
