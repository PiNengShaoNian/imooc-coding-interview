export const findTriads = (arr: number[]): boolean => {
  if (arr.length < 3) throw new Error('Invalid input')

  let ans = false

  const leftMin: number[] = []
  leftMin[0] = arr[0]
  for (let i = 1; i < arr.length; ++i) {
    const min = Math.min(leftMin[i - 1], arr[i])

    leftMin[i] = min
  }

  let rightMaxNumber = arr[arr.length - 1]
  for (let i = arr.length - 2; i >= 1; --i) {
    if (arr[i] < rightMaxNumber && arr[i] > leftMin[i - 1]) return true

    rightMaxNumber = Math.max(rightMaxNumber, arr[i])
  }

  return ans
}
