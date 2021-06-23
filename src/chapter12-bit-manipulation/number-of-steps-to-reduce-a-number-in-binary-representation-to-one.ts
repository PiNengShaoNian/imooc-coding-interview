export const numSteps = (s: string): number => {
  let n = BigInt('0b' + s)
  let steps = 0

  while (n > 1n) {
    if (n & 1n) {
      n += 1n
    } else {
      n >>= 1n
    }

    ++steps
  }

  return steps
}

export const numSteps1 = (s: string): number => {
  const bitArray: number[] = Array.from({ length: s.length }, (_, i) => +s[i])
  let steps = 0

  while (bitArray.length > 1 || bitArray[0] !== 1) {
    const i = bitArray.length - 1

    if (bitArray[i] & 1) {
      bitArray[i] = 0
      let carry = false
      for (let j = i - 1; j >= 0; --j) {
        if (bitArray[j] === 0) {
          bitArray[j] = 1
          carry = true
          break
        } else {
          bitArray[j] = 0
        }
      }

      if (!carry) {
        bitArray.unshift(1)
      }
    } else {
      bitArray.pop()
    }

    ++steps
  }

  return steps
}
