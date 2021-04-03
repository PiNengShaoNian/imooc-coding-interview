export const subarraysWithKDistinct = (A: number[], K: number): number => {
  const calc = (A: number[], K: number): number => {
    const map: Map<number, number> = new Map()
    let ans = 0

    let l = 0
    let r = -1
    let count = 0

    for (let i = 0; i < A.length; ++i) {
      while (l < A.length) {
        if (count < K && r + 1 < A.length) {
          const prev = map.get(A[++r]) ?? 0

          if (prev === 0) ++count
          map.set(A[r], prev + 1)
        } else break
      }

      if (count < K) break

      ans += A.length - r

      const prev = map.get(A[i]) ?? 0
      if (prev === 1) --count
      map.set(A[i], prev - 1)
    }

    return ans
  }

  return calc(A, K) - calc(A, K + 1)
}
