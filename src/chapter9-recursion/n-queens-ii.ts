export const totalNQueens = (n: number): number => {
  const rows: boolean[] = Array.from({ length: n })
  const cols: boolean[] = Array.from({ length: n })
  const dia2: boolean[] = Array.from({ length: 2 * n - 1 })
  const dia1: boolean[] = Array.from({ length: 2 * n - 1 })
  let ans = 0
  const dfs = (row: number): void => {
    if (row >= n) {
      ++ans
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!rows[row] && !cols[i] && !dia1[row - i + n - 1] && !dia2[row + i]) {
        cols[i] = rows[row] = dia1[row - i + n - 1] = dia2[row + i] = true
        dfs(row + 1)
        cols[i] = rows[row] = dia1[row - i + n - 1] = dia2[row + i] = false
      }
    }
  }

  dfs(0)

  return ans
}
