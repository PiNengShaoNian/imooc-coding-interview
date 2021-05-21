import { Comparable, MinHeap } from '../util/min-heap'

class WeightedEdge implements Comparable<WeightedEdge> {
  constructor(public row: number, public col: number, public weight: number) {}
  equals(_: WeightedEdge): boolean {
    throw new Error('Method not implemented.')
  }

  compareTo(that: WeightedEdge) {
    return this.weight - that.weight
  }
}

export const minCost = (grid: number[][]): number => {
  const dist: number[][] = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => -1)
  )

  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  const rows = grid.length
  const cols = grid[0].length

  const pq = new MinHeap<WeightedEdge>()

  for (pq.insert(new WeightedEdge(0, 0, 0)); dist[rows - 1][cols - 1] < 0; ) {
    const cur = pq.deleteMin()!

    if (dist[cur.row][cur.col] >= 0) continue
    dist[cur.row][cur.col] = cur.weight

    for (let i = 0; i < 4; ++i) {
      const row = cur.row + dx[i]
      const col = cur.col + dy[i]

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        pq.insert(
          new WeightedEdge(
            row,
            col,
            cur.weight + (grid[cur.row][cur.col] == i + 1 ? 0 : 1)
          )
        )
      }
    }
  }

  return dist[rows - 1][cols - 1]
}
