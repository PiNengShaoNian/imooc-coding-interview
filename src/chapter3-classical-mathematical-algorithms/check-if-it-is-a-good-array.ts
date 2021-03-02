const gcd = (x: number, y: number): number => {
  return y <= 0 ? x : gcd(y, x % y)
}

function isGoodArray(nums: number[]): boolean {
  let accumulator = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    accumulator = gcd(accumulator, nums[i])

    if (accumulator == 1) break
  }

  return accumulator === 1
}
