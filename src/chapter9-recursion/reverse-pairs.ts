export const reversePairs = (nums: number[]): number => {
  const count = (nums: number[], left: number, right: number): number => {
    if (left >= right) return 0
    const mid = (left + right) >> 1
    let ans = count(nums, left, mid) + count(nums, mid + 1, right)

    const temp: number[] = Array.from({ length: right - left + 1 })
    for (let i = left, j = mid + 1, t = j, k = 0; k < temp.length; ++k) {
      if (i <= mid && (j > right || nums[i] < nums[j])) {
        for (; t <= right && nums[i] > 2 * nums[t]; ++t);

        ans += t - mid - 1

        temp[k] = nums[i++]
      } else {
        temp[k] = nums[j++]
      }
    }

    for (let i = left; i <= right; ++i) {
      nums[i] = temp[i - left]
    }

    return ans
  }

  return count(nums, 0, nums.length - 1)
}
