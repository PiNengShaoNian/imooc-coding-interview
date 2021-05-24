/**
 * 并查集做法
 */

import { UnionFind } from '../util/union-find'

type WeightedEdge = {
  weight: number
  from: [number, number]
  to: [number, number]
}
export const minimumEffortPath = (heights: number[][]): number => {
  const rows = heights.length
  const cols = heights[0].length
  const uf = new UnionFind(rows * cols)
  const edges: WeightedEdge[] = []

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      let newRow = i + 1
      let newCol = j

      if (newRow < rows && newCol < cols) {
        edges.push({
          weight: Math.abs(heights[i][j] - heights[newRow][newCol]),
          from: [i, j],
          to: [newRow, newCol],
        })
      }

      newRow = i
      newCol = j + 1
      if (newRow < rows && newCol < cols) {
        edges.push({
          weight: Math.abs(heights[i][j] - heights[newRow][newCol]),
          from: [i, j],
          to: [newRow, newCol],
        })
      }
    }
  }

  edges.sort((a, b) => a.weight - b.weight)

  let ans = 0
  let index = 0
  for (; !uf.connected(0, rows * cols - 1); ) {
    const { from, to, weight } = edges[index]
    uf.union(from[0] * cols + from[1], to[0] * cols + to[1])
    ans = Math.max(ans, weight)
    ++index
  }

  return ans
}
