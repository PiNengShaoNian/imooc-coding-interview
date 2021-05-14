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

export const findCriticalAndPseudoCriticalEdges = (
  n: number,
  edges: number[][]
): number[][] => {
  const a: number[] = []
  const b: number[] = []
  const edgesWithIndex: number[][] = []

  const mst = (
    verticesCount: number,
    vertex: number,
    uf: UnionFind
  ): number => {
    let ans = 0
    let m = 0
    for (let i = 0; m < verticesCount - 1 && i < edges.length; ++i) {
      if (i === vertex) continue

      if (uf.union(edgesWithIndex[i][0], edgesWithIndex[i][1])) {
        ++m
        ans += edgesWithIndex[i][2]
      }
    }

    return m === verticesCount - 1 ? ans : Infinity
  }

  for (let i = 0; i < edges.length; ++i) {
    edgesWithIndex[i] = [edges[i][0], edges[i][1], edges[i][2], i]
  }

  edgesWithIndex.sort((a, b) => a[2] - b[2])

  let uf = new UnionFind(n)
  const w = mst(n, -1, uf)
  for (let i = 0; i < edgesWithIndex.length; ++i) {
    uf = new UnionFind(n)
    if (mst(n, i, uf) > w) {
      a.push(edgesWithIndex[i][3])
    } else {
      uf = new UnionFind(n)
      uf.union(edgesWithIndex[i][0], edgesWithIndex[i][1])
      if (mst(n - 1, i, uf) + edgesWithIndex[i][2] === w) {
        b.push(edgesWithIndex[i][3])
      }
    }
  }

  return [a, b]
}
