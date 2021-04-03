export const substrings1 = (str: string, k: number): number => {
  const calc = (str: string, k: number): number => {
    const baseOffset = 97
    let ans = 0
    let l = 0
    let r = -1
    let count = 0
    const window: number[] = Array.from({ length: 26 }, () => 0)
    for (let i = 0; i < str.length; ++i) {
      while (l < str.length) {
        if (count < k && r + 1 < str.length) {
          const hash = str[++r].charCodeAt(0) - baseOffset

          if (++window[hash] === 1) ++count
        } else break
      }

      if (count < k) break

      ans += str.length - r
      if (--window[str[i].charCodeAt(0) - baseOffset] === 0) --count
    }

    return ans
  }

  return calc(str, k) - calc(str, k + 1)
}
