export const lowerBound = (data: number[], target: number) => {
  let lo = 0
  let hi = data.length - 1

  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1)

    if (data[mid] > target) {
      hi = mid - 1
    } else if (data[mid] === target) {
      hi = mid - 1
    } else if (data[mid] < target) {
      lo = mid + 1
    }
  }

  if (lo >= data.length) return data.length
  return lo
}

export const findBestValue = (arr: number[], target: number): number => {
  arr.sort((a, b) => a - b)
  let left = 1
  let right = arr[arr.length - 1]
  const presum: number[] = Array.from({ length: arr.length + 1 })
  presum[0] = 0

  for (let i = 1; i <= arr.length; ++i) {
    presum[i] = presum[i - 1] + arr[i - 1]
  }

  const check = (arr: number[], x: number): number => {
    let ans = 0

    for (let i = 0; i < arr.length; ++i) {
      ans += arr[i] > x ? x : arr[i]
    }

    return ans
  }

  let ans = 0
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)

    const index = lowerBound(arr, mid)

    let sum = presum[index] + (arr.length - index) * mid

    if (sum <= target) {
      ans = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  const chooseSmall = check(arr, ans)
  const chooseBig = check(arr, ans + 1)

  return Math.abs(chooseSmall - target) <= Math.abs(chooseBig - target)
    ? ans
    : ans + 1
}
