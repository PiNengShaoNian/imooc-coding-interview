export const hasElement = (arr: number[]): boolean => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = left + (right - left) / 2

    const cmp = arr[mid] - mid

    if (cmp === 0) return true
    else if (cmp > 0) right = mid - 1
    else if (cmp < 0) left = mid + 1
  }

  return false
}
