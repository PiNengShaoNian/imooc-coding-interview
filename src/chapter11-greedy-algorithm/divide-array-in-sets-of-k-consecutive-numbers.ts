import { TreeMap } from '../util/tree-map'

export const isPossibleDivide = (nums: number[], k: number): boolean => {
  if (nums.length % k !== 0) return false
  const freq = new TreeMap<number, number>()

  for (let x of nums) {
    freq.put(x, (freq.get(x) ?? 0) + 1)
  }

  for (let i = nums.length / k; i > 0; --i) {
    let x = freq.min()!

    for (let j = 0; j < k; ++x, ++j) {
      let c = freq.get(x) ?? 0

      if (c === 0) {
        return false
      }

      if (--c === 0) {
        freq.delete(x)
      } else {
        freq.put(x, c)
      }
    }
  }

  return true
}
