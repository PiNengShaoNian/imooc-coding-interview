export const getHappyString = (n: number, k: number): string => {
  const map = ['a', 'b', 'c']
  let m = k
  const core = (s: string, n: number, map: string[]): string => {
    if (s.length === n) {
      return --m === 0 ? s : ''
    }

    for (let i = 0; i <= 2; ++i) {
      if (s.length === 0 || s[s.length - 1] !== map[i]) {
        s += map[i]
        const temp = core(s, n, map)
        if (temp !== '') return temp
        s = s.slice(0, s.length - 1)
      }
    }

    return ''
  }

  return core('', n, map)
}
