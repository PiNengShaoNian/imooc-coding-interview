export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  let max = -1

  for (let i = 0; i < candies.length; ++i) {
    max = Math.max(candies[i], max)
  }

  const aux = max - extraCandies

  const ans: boolean[] = []

  for (let i = 0; i < candies.length; ++i) {
    ans[i] = candies[i] >= aux
  }

  return ans
}
