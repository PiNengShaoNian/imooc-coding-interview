export const countSmaller = (nums: number[]): number[] => {
  const ans: number[] = Array.from({ length: nums.length }, () => 0)

  const count = (
    indexedNums: { value: number; index: number }[],
    ans: number[],
    left: number,
    right: number
  ): void => {
    if (left >= right) return

    const mid = left + Math.floor((right - left) / 2)
    count(indexedNums, ans, left, mid)
    count(indexedNums, ans, mid + 1, right)
    const temp: { value: number; index: number }[] = Array.from({
      length: right - left + 1,
    })
    for (let i = left, j = mid + 1, k = 0, t = j; k < temp.length; ++k) {
      if (
        i <= mid &&
        (j > right || indexedNums[i].value < indexedNums[j].value)
      ) {
        for (; t <= right && indexedNums[t].value < indexedNums[i].value; ++t);

        ans[indexedNums[i].index] += t - mid - 1
        temp[k] = indexedNums[i++]
      } else {
        temp[k] = indexedNums[j++]
      }
    }

    for (let i = 0; i < temp.length; ++i) {
      indexedNums[left + i] = temp[i]
    }
  }

  const indexedNums: { value: number; index: number }[] = nums.map((v, i) => ({
    value: v,
    index: i,
  }))

  count(indexedNums, ans, 0, nums.length - 1)
  return ans
}
