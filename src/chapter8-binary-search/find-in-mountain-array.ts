declare class MountainArray {
  get(index: number): number

  length(): number
}

export const binarySearch = (
  left: number,
  right: number,
  mountainArr: MountainArray,
  desc: boolean,
  target: number
): number => {
  const lo = left
  const hi = right
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (!desc) {
      if (mountainArr.get(mid) >= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (mountainArr.get(mid) >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  if (!desc && (left > hi || mountainArr.get(left) !== target)) return -1

  if (desc && (right < 0 || mountainArr.get(right) !== target)) return -1

  if (!desc) return left
  else return right
}

export const getPeak = (
  left: number,
  right: number,
  mountainArr: MountainArray
): number => {
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (left === right) break
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

export function findInMountainArray(
  target: number,
  mountainArr: MountainArray
) {
  const peak = getPeak(0, mountainArr.length() - 1, mountainArr)

  const temp = binarySearch(0, peak, mountainArr, false, target)
  if (temp !== -1) return temp

  return binarySearch(peak, mountainArr.length() - 1, mountainArr, true, target)
}
