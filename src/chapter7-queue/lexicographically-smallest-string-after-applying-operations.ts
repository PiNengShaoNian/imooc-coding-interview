export const findLexSmallestString = (
  s: string,
  a: number,
  b: number
): string => {
  let anw: string = s
  const incr = (s: string): string => {
    let res = ''
    for (let i = 0; i < s.length; ++i) {
      if (i % 2 === 0) res += s[i]
      else res += +s[i] + a > 9 ? +s[i] + a - 9 - 1 : +s[i] + a
    }

    return res
  }

  const rotate = (s: string): string => {
    return s.slice(s.length - b) + s.slice(0, s.length - b)
  }

  for (let i = 0; i <= s.length; i++) {
    // 轮转
    s = rotate(s)
    // 修改奇数位置
    for (let j = 0; j < 10; j++) {
      s = incr(s)
      if (b % 2) {
        // b为奇数，此时通过轮转，也能修改偶数位置
        for (let m = 0; m < 10; m++) {
          const temp = [...s]
          for (let k = 0; k < s.length; k += 2) {
            const num = +temp[k] + a
            if (num <= 9) temp[k] = num + ''
            else temp[k] = num - 9 - 1 + ''
          }

          s = temp.join('')

          anw = anw > s ? s : anw
        }
      } else {
        anw = anw > s ? s : anw
      }
    }
  }
  return anw
}
