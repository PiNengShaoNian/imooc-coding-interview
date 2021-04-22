export function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b)

  let left = 1
  let right = position[position.length - 1]

  while (left <= right) {
    let remaing = m - 1
    const mid = left + Math.floor((right - left) / 2)
    for (
      let i = 1, last = position[0];
      remaing > 0 && i < position.length;
      ++i
    ) {
      if (position[i] - last >= mid) {
        --remaing
        last = position[i]
      }
    }

    if (remaing === 0) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}
