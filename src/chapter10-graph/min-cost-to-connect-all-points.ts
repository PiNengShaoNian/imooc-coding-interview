class UnionFind {
  size: number[]
  id: number[]

  constructor(c: number) {
    this.size = Array.from({ length: c }, () => 1)
    this.id = Array.from({ length: c }, (_, id) => id)
  }

  find(x: number): number {
    return x === this.id[x] ? x : (this.id[x] = this.find(this.id[x]))
  }

  connected(p: number, q: number): boolean {
    const leaderId1 = this.find(p)
    const leaderId2 = this.find(q)

    return leaderId1 === leaderId2
  }

  union(p: number, q: number): boolean {
    p = this.find(p)
    q = this.find(q)

    if (p === q) return false

    if (this.size[p] > this.size[q]) {
      this.size[p] += this.size[q]
      this.id[q] = p
    } else {
      this.size[q] += this.size[p]
      this.id[p] = q
    }

    return true
  }
}

export function minCostConnectPoints(points: number[][]): number {
  let ans = 0
  const n = points.length

  const edges: [number, number, number][] = []
  const uf = new UnionFind(n)

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      edges.push([
        i,
        j,
        Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1]),
      ])
    }
  }

  edges.sort((a, b) => a[2] - b[2])

  for (let i = 0, j = 0; i < edges.length && j < n - 1; ++i) {
    if (uf.union(edges[i][0], edges[i][1])) {
      ++j
      ans += edges[i][2]
    }
  }

  return ans
}
