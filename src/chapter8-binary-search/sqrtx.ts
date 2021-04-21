export function mySqrt(x: number): number {
  let left = 0
  let right = x

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)

    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return Math.floor(left - 1)
}
