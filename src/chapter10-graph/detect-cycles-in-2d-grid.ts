export const containsCycle = (grid: string[][]): boolean => {
  const visited: boolean[][] = Array.from({ length: grid.length }, () => [])
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const dfs = (x: number, y: number, lastX: number, lastY: number): boolean => {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] !== grid[lastX][lastY]
    )
      return false

    if (visited[x][y]) return true
    visited[x][y] = true
    for (const [offsetX, offsetY] of directions) {
      const nextX = offsetX + x
      const nextY = offsetY + y

      if ((lastY !== nextY || lastX !== nextX) && dfs(nextX, nextY, x, y))
        return true
    }

    return false
  }

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (!visited[i][j] && dfs(i, j, i, j)) return true
    }
  }

  return false
}
