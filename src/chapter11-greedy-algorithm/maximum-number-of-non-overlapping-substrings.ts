export const maxNumOfSubstrings = (s: string): string[] => {
  const left = Array.from({ length: 26 }, () => -1)
  const right = Array.from({ length: 26 }, () => -1)

  for (let i = 0; i < s.length; ++i) {
    const charCode = s.charCodeAt(i) - 97

    if (left[charCode] === -1) {
      left[charCode] = i
    }

    right[charCode] = i
  }

  const ans: string[] = []

  for (let i = 0, last = -1; i < s.length; ++i) {
    const charCode = s.charCodeAt(i) - 97

    if (left[charCode] !== i) continue

    let end = right[charCode]
    for (let j = i + 1; j <= end; ++j) {
      const nextCharCode = s.charCodeAt(j) - 97
      end = left[nextCharCode] < i ? -1 : Math.max(end, right[nextCharCode])
    }

    if (end >= 0) {
      if (last >= i) {
        ans.pop()
      }
      ans.push(s.substring(i, end + 1))
      last = end
    }
  }

  return ans
}

/**
 * 前缀和解法
 * @param s
 * @returns
 */
export const maxNumOfSubstrings1 = (s: string): string[] => {
  const presum: number[][] = Array.from({ length: 26 }, () => [0])
  const range: number[][] = Array.from({ length: 26 }, () => [
    Infinity,
    -Infinity,
  ])

  for (let i = 0; i < s.length; ++i) {
    const index = s.charCodeAt(i) - 97

    range[index][0] = Math.min(range[index][0], i)
    range[index][1] = Math.max(range[index][1], i)
    for (let j = 0; j < 26; ++j) {
      presum[j][i + 1] = presum[j][i]

      if (j === index) {
        ++presum[j][i + 1]
      }
    }
  }

  const expand: number[][] = Array.from({ length: 26 }, () => [
    Infinity,
    -Infinity,
  ])

  for (let i = 0; i < 26; ++i) {
    expand[i][0] = range[i][0]
    expand[i][1] = range[i][1]

    if (range[i][0] > range[i][1]) continue

    while (true) {
      const l = expand[i][0]
      const r = expand[i][1]
      for (let j = 0; j < 26; ++j) {
        if (presum[j][r + 1] - presum[j][l] > 0) {
          expand[i][0] = Math.min(range[j][0], expand[i][0])
          expand[i][1] = Math.max(range[j][1], expand[i][1])
        }
      }

      if (l === expand[i][0] && r === expand[i][1]) break
    }
  }

  expand.sort((a, b) => a[1] - b[1])

  let end = -1
  const ans: string[] = []

  for (let i = 0; i < 26; ++i) {
    const l = expand[i][0]
    const r = expand[i][1]

    if (l > r) continue
    if (end <= l) {
      ans.push(s.substring(l, r + 1))
      end = r
    }
  }

  return ans
}
