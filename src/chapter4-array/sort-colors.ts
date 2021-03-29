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
