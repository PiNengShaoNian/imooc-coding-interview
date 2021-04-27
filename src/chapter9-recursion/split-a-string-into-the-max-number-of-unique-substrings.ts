export const maxUniqueSplit = (s: string): number => {
  const all = new Set<string>()

  let ans = 1
  const core = (index: number, s: string, all: Set<string>): void => {
    if (s.length - index + all.size <= ans) return

    if (index === s.length) {
      ans = all.size
      return
    }
    for (let i = index + 1; i <= s.length; ++i) {
      const temp = s.slice(index, i)

      if (!all.has(temp)) {
        all.add(temp)
        core(i, s, all)
        all.delete(temp)
      }
    }
  }

  core(0, s, all)

  return ans
}
