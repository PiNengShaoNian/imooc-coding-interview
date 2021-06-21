export const singleNumber = (nums: number[]): number => {
  let a: number[] = [~0, 0, 0]

  for (let i = 0; i < nums.length; ++i) {
    a = [
      (a[0] ^ (nums[i] & a[0])) | (nums[i] & a[2]),
      (a[1] ^ (nums[i] & a[1])) | (nums[i] & a[0]),
      (a[2] ^ (nums[i] & a[2])) | (nums[i] & a[1]),
    ]
  }

  return a[1]
}
