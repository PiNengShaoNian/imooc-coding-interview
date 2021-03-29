export const numIdenticalPairs = (nums: number[]): number => {
  const count: number[] = Array.from({ length: 101 }, () => 0)
  let ans = 0
  for (let i = 0; i < nums.length; ++i) {
    ++count[nums[i]]
  }

  for (let i = 0; i < count.length; ++i) {
    if (count[i] <= 1) continue
    else if (count[i] === 2) ans += 1
    else ans += factorial(count[i]) / (2 * factorial(count[i] - 2))
  }

  return ans
}

const factorial = (n: number): number => {
  let ans = 1

  while (n) {
    ans *= n
    --n
  }
  return ans
}
