export const subarraysWithKDistinct = (A: number[], K: number): number => {
  const map: Map<number, number> = new Map()
  let ans = 0

  let l = 0
  let r = -1
  let count = 0

  while (l < A.length) {
    if (
      (count < K && r + 1 < A.length) ||
      (count === K && r + 1 < A.length && (map.get(A[r + 1]) ?? 0) > 0)
    ) {
      const prev = map.get(A[++r]) ?? 0

      if (prev === 0) ++count
      map.set(A[r], prev + 1)
    } else {
      const num = A[l++]
      const prev = map.get(num)!

      if (prev === 1) --count
      map.set(num, prev - 1)
    }

    if (count === K) ++ans
  }

  return ans
}
