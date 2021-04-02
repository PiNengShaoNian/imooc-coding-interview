export const balancedString = (s: string): number => {
  const map: Map<string, number> = new Map([
    ['Q', 0],
    ['W', 0],
    ['E', 0],
    ['R', 0],
  ])
  let ans = s.length

  for (let i = 0; i < s.length; ++i) {
    map.set(s[i], map.get(s[i])! + 1)
  }

  let l = 0
  let r = -1
  let m = s.length / 4

  while (l < s.length) {
    if (
      (map.get('Q')! > m ||
        map.get('W')! > m ||
        map.get('E')! > m ||
        map.get('R')! > m) &&
      r + 1 < s.length
    ) {
      const char = s[++r]
      map.set(char, map.get(char)! - 1)
    } else {
      const char = s[l++]
      map.set(char, map.get(char)! + 1)
    }

    if (
      map.get('Q')! <= m &&
      map.get('W')! <= m &&
      map.get('E')! <= m &&
      map.get('R')! <= m &&
      r - l + 1 < ans
    ) {
      ans = r - l + 1
    }
  }

  return ans
}
