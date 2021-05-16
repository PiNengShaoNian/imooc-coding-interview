import { Comparable, MinHeap } from '../util/min-heap'

class WeightedEdge implements Comparable<WeightedEdge> {
  constructor(public row: number, public col: number, public weight: number) {}

  compareTo(that: WeightedEdge) {
    return this.weight - that.weight
  }

  equals(_: WeightedEdge): boolean {
    throw new Error('Not Implement')
  }
}

export const minimumEffortPath = (heights: number[][]): number => {
  const pq = new MinHeap<WeightedEdge>()
  const dc = [0, 1, 0, -1]
  const dr = [-1, 0, 1, 0]
  const rows = heights.length
  const cols = heights[0].length
  const visited: boolean[][] = Array.from({ length: rows }, () => [])

  for (pq.insert(new WeightedEdge(0, 0, 0)); !pq.isEmpty(); ) {
    const { row, col, weight } = pq.deleteMin()!

    if (visited[row][col]) continue

    visited[row][col] = true

    if (row === rows - 1 && col === cols - 1) return weight

    for (let i = 0; i < 4; ++i) {
      const newRow = row + dr[i]
      const newCol = col + dc[i]

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        pq.insert(
          new WeightedEdge(
            newRow,
            newCol,
            Math.max(
              weight,
              Math.abs(heights[row][col] - heights[newRow][newCol])
            )
          )
        )
      }
    }
  }

  return -1
}
