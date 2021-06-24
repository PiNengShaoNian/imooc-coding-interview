export const maxSumAfterPartitioning = (arr: number[], k: number): number => {
  const n = arr.length
  const dp = Array.from({ length: arr.length + 1 }, () => 0)

  for (let i = 1; i <= arr.length; ++i) {
    for (let j = 1, m = 0; j <= i && j <= k; ++j) {
      m = Math.max(m, arr[i - j])
      dp[i] = Math.max(dp[i], dp[i - j] + m * j)
    }
  }

  return dp[n]
}
