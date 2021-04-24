export function shipWithinDays(weights: number[], D: number): number {
  const days = (capacity: number): number => {
    let remaining = capacity
    let ans = 0
    for (let i = 0; i < weights.length; ++i) {
      if (weights[i] > capacity) return Infinity
      if (weights[i] <= remaining) {
        remaining -= weights[i]
      } else {
        remaining = capacity - weights[i]
        ++ans
      }
    }

    return ans + 1
  }

  let left = 0
  let right = 2 ** 32

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (days(mid) <= D) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
