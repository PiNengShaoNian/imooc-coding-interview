export const singleNumber = (nums: number[]): number[] => {
  let s = 0

  for (const n of nums) {
    s ^= n
  }

  s ^= (s - 1) & s
  const ans = [0, 0]

  for (const num of nums) {
    ans[(num & s) === 0 ? 0 : 1] ^= num
  }

  return ans
}
