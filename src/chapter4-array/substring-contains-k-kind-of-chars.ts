export const substrings = (str: string, k: number): number => {
  const window = Array.from({ length: 26 }, () => 0)

  const baseOffset: number = 'a'.charCodeAt(0)

  let l = 0,
    r = -1,
    count = 0

  let ans = 0
  while (l < str.length) {
    if (
      (count < k && r + 1 < str.length) ||
      (count === k &&
        r + 1 < str.length &&
        window[str[r + 1].charCodeAt(0) - baseOffset] !== 0)
    ) {
      const charCode = str[++r].charCodeAt(0)
      if (window[charCode - baseOffset] === 0) ++count
      ++window[charCode - baseOffset]
    } else {
      const charCode = str[l++].charCodeAt(0)
      if (window[charCode - baseOffset] === 1) --count

      --window[charCode - baseOffset]
    }

    if (count === k) ++ans
  }

  return ans
}

export const substrings1 = (str: string, k: number): number => {
  const calc = (str: string, k: number): number => {
    const baseOffset = 97
    let ans = 0
    for (let i = 0; i < str.length; ++i) {
      let l = i
      let r = i - 1
      let count = 0
      const window: number[] = Array.from({ length: 26 }, () => 0)
      while (l < str.length) {
        if (count < k && r + 1 < str.length) {
          const hash = str[++r].charCodeAt(0) - baseOffset
          const prev = window[hash]

          if (prev === 0) ++count
          ++window[hash]
        }

        if (count === k) {
          ans += str.length - l
          break
        }
      }
    }
  }

  return calc(str, k) - calc(str, k + 1)
}
