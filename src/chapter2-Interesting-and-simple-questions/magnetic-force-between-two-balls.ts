export function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b)
  let hi = position[position.length - 1] - position[0]
  let lo = 0
  const validateForce = (force: number): boolean => {
    let start = 1
    let flag = m - 1
    let prev = 0

    while (start < position.length) {
      if (position[start] - position[prev] >= force) {
        --flag
        prev = start
      }

      ++start

      if (flag <= 0) return true
    }

    return false
  }

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    const isValid = validateForce(mid)

    if (isValid) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return hi
}
