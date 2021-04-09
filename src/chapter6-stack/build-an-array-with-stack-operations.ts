export function buildArray(target: number[], _n: number): string[] {
  const ans: string[] = []
  for (let i = 0, j = 1; i < target.length; ++j) {
    ans.push('Push')
    if (j < target[i]) {
      ans.push('Pop')
    } else ++i
  }

  return ans
}
