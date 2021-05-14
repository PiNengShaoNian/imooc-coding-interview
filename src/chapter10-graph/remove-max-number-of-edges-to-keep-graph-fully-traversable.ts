class UnionFind {
  size: number[]
  id: number[]
  _count: number

  constructor(c: number) {
    this.size = Array.from({ length: c }, () => 1)
    this.id = Array.from({ length: c }, (_, id) => id)
    this._count = c
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

    --this._count
    return true
  }

  count(): number {
    return this._count
  }
}

export const maxNumEdgesToRemove = (n: number, edges: number[][]): number => {
  const uf = new UnionFind(n)
  const edgeGroups: number[][][] = [[], [], [], []]
  let m = 0
  for (let i = 0; i < edges.length; ++i) {
    edgeGroups[edges[i][0]].push(edges[i])
  }

  for (let i = 0; i < edgeGroups[3].length; ++i) {
    if (uf.union(edgeGroups[3][i][1], edgeGroups[3][i][2])) {
      ++m
    }
  }

  if (uf.count() === 1) return edges.length - m

  const prevId = Array.from(uf.id)
  const prevSize = Array.from(uf.size)
  const prevCount = uf.count()

  for (let i = 0; i < edgeGroups[2].length; ++i) {
    if (uf.union(edgeGroups[2][i][1], edgeGroups[2][i][2])) {
      ++m
    }
    if (uf.count() === 1) break
  }

  if (uf.count() > 1) return -1

  uf.id = prevId
  uf.size = prevSize
  uf._count = prevCount

  for (let i = 0; i < edgeGroups[1].length; ++i) {
    if (uf.union(edgeGroups[1][i][1], edgeGroups[1][i][2])) {
      ++m
    }
    if (uf.count() === 1) break
  }

  if (uf.count() > 1) return -1

  return edges.length - m
}
