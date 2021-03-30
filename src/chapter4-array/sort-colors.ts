export const sortColors = (nums: number[]): void => {
  const count: number[] = [0, 0, 0]

  for (let i = 0; i < nums.length; ++i) {
    ++count[nums[i]]
  }

  let currIndex = 0
  for (let i = 0; i < count.length; ++i) {
    for (let j = 0; j < count[i]; ++j) {
      nums[currIndex++] = i
    }
  }
}

export const sortColors1 = (nums: number[]): void => {
  for (let i = 0, j = 0, k = nums.length - 1; j <= k; ++j) {
    if (nums[j] === 0) {
      nums[j] = nums[i]
      nums[i++] = 0
    } else if (nums[j] === 2) {
      nums[j--] = nums[k]
      nums[k--] = 2
    }
  }
}
