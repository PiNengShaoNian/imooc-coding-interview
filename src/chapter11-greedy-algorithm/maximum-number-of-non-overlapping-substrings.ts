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
