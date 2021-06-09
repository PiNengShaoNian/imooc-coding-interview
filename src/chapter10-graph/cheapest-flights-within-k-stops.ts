import { Comparable, MinHeap } from '../util/min-heap'

class Edge implements Comparable<Edge> {
  constructor(public price: number, public k: number, public i: number) {}

  compareTo(that: Edge): number {
    return this.price - that.price
  }
  equals(_: Edge): boolean {
    throw new Error('Method not implemented.')
  }
}

export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const pq = new MinHeap<Edge>()

  const graph: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  )

  for (let i = 0; i < flights.length; ++i) {
    const [from, to, price] = flights[i]

    graph[from][to] = price
  }

  for (pq.insert(new Edge(0, k, src)); pq.size(); ) {
    const { k, i, price } = pq.deleteMin()!

    if (i === dst) return price

    if (k < 0) continue

    for (let j = 0; j < n; ++j) {
      if (graph[i][j] > 0) pq.insert(new Edge(price + graph[i][j], k - 1, j))
    }
  }

  return -1
}

export function findCheapestPrice1(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const dp: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: k + 1 }, () => Infinity)
  )

  for (let i = 0; i <= k; ++i) {
    dp[src][i] = 0
  }

  for (const flight of flights) {
    if (flight[0] === src) {
      dp[flight[1]][0] = flight[2]
    }
  }

  for (let i = 1; i <= k; ++i) {
    for (const flight of flights) {
      const from = flight[0]
      const to = flight[1]
      if (dp[from][i - 1] < Infinity) {
        dp[to][i] = Math.min(dp[from][i - 1] + flight[2], dp[to][i])
      }
    }
  }

  if (dp[dst][k] < Infinity) return dp[dst][k]
  else return -1
}
