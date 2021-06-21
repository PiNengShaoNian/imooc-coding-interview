export const singleNumber = (nums: number[]): number => {
  let r = 0

  for (let i = 0; i < nums.length; ++i) {
    r ^= nums[i]
  }

  return r
}
