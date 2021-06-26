function subarrayBitwiseORs(arr: number[]): number {
  const s: Set<number> = new Set()
  let temp: Set<number> = new Set()

  for (const x of arr) {
    const t: Set<number> = new Set()
    t.add(x)
    for (const y of temp) {
      t.add(x | y)
    }
    temp = t
    for (const value of t) {
      s.add(value)
    }
  }

  return s.size
}
