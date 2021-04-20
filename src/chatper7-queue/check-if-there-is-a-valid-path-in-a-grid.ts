import { Queue } from '../util/queue'

type Point = [number, number]
export const hasValidPath = (grid: number[][]): boolean => {
  const queue = new Queue<Point>()

  queue.enqueue([0, 0])
  const rows = grid.length
  const cols = grid[0].length

  const visited = new Set<string>()

  const isLeftAvailable = (x: number): boolean => [1, 3, 5].includes(x)
  const isRightAvailable = (x: number): boolean => [1, 4, 6].includes(x)
  const isBottomAvailable = (x: number): boolean => [2, 3, 4].includes(x)
  const isTopAvailable = (x: number): boolean => [2, 5, 6].includes(x)
  const pointToKey = (x: number, y: number): string => x + '-' + y

  while (!queue.isEmpty()) {
    const [row, col] = queue.dequeue()!
    visited.add(row + '-' + col)
    if (row === rows - 1 && col === cols - 1) return true

    if (isLeftAvailable(grid[row][col])) {
      if (
        col - 1 >= 0 &&
        isRightAvailable(grid[row][col - 1]) &&
        !visited.has(pointToKey(row, col - 1))
      ) {
        queue.enqueue([row, col - 1])
      }
    }

    if (isRightAvailable(grid[row][col])) {
      if (
        col + 1 < cols &&
        isLeftAvailable(grid[row][col + 1]) &&
        !visited.has(pointToKey(row, col + 1))
      ) {
        queue.enqueue([row, col + 1])
      }
    }

    if (isTopAvailable(grid[row][col])) {
      if (
        row - 1 >= 0 &&
        isBottomAvailable(grid[row - 1][col]) &&
        !visited.has(pointToKey(row - 1, col))
      ) {
        queue.enqueue([row - 1, col])
      }
    }

    if (isBottomAvailable(grid[row][col])) {
      if (
        row + 1 < rows &&
        isTopAvailable(grid[row + 1][col]) &&
        !visited.has(pointToKey(row + 1, col))
      ) {
        queue.enqueue([row + 1, col])
      }
    }
  }

  return false
}
