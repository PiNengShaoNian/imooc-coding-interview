export class UnionFind {
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
