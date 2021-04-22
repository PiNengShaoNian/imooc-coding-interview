export function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length / k < m) return -1

  let right = 10 ** 9
  let left = 0

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    let remaing = m

    for (let i = 0, num = 0; i < bloomDay.length && remaing > 0; ++i) {
      if (mid >= bloomDay[i]) {
        if (++num === k) {
          num = 0
          --remaing
        }
      } else {
        num = 0
      }
    }

    if (remaing === 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
