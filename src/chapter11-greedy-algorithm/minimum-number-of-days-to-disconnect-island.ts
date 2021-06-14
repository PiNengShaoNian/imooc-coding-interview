const connectedComponents = (
  visited: boolean[][],
  rows: number,
  cols: number
): number => {
  let count = 0

  const dfs = (row: number, col: number) => {
    visited[row][col] = true

    if (row + 1 < rows && !visited[row + 1][col]) {
      dfs(row + 1, col)
    }

    if (row - 1 >= 0 && !visited[row - 1][col]) {
      dfs(row - 1, col)
    }

    if (col + 1 < cols && !visited[row][col + 1]) {
      dfs(row, col + 1)
    }

    if (col - 1 >= 0 && !visited[row][col - 1]) {
      dfs(row, col - 1)
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (!visited[i][j]) {
        dfs(i, j)
        ++count
      }
    }
  }

  return count
}

export const minDays = (grid: number[][]): number => {
  const rows = grid.length
  const cols = grid[0].length
  let visited: boolean[][] = Array.from({ length: grid.length }, () => [])

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 0) {
        visited[i][j] = true
      } else {
        visited[i][j] = false
      }
    }
  }
  const prevVisited = Array.from({ length: visited.length }, (_, i) => [
    ...visited[i],
  ])
  const count = connectedComponents(visited, rows, cols)
  visited = prevVisited
  if (count > 1) return 0
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] !== 1) continue

      const prevVisited = Array.from({ length: visited.length }, (_, i) => [
        ...visited[i],
      ])
      visited[i][j] = true
      const cur = connectedComponents(visited, rows, cols)
      visited = prevVisited
      if (cur > 1 || cur === 0) {
        return 1
      }
    }
  }

  return 2
}
