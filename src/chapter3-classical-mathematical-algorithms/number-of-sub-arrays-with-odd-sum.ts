const numOfSubarrays = (arr: number[]): number => {
  const s: [number, number] = [1, 0]
  let r = 0

  for (let i = 0, sum = 0; i < arr.length; ++i) {
    ++s[(sum ^= arr[i] & 1)]
    r += s[sum ^ 1]
  }

  return r % 1000000007
}

console.log(numOfSubarrays([1, 3, 5]))
console.log(numOfSubarrays([2, 4, 6]))
