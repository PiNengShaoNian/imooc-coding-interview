export function balancedStringSplit(s: string): number {
  let depth = 0

  let ans = 0
  for (let i = 0; i < s.length; ++i) {
    depth += s[i] === 'R' ? 1 : -1

    if (depth === 0) {
      ++ans
    }
  }

  return ans
}
