const getBit = (a: number, i: number): number => (a >> i) & 1

export const minFlips = (a: number, b: number, c: number): number => {
  let ans = 0
  for (let i = 0; i <= 30; ++i) {
    const aa = getBit(a, i)
    const bb = getBit(b, i)
    const cc = getBit(c, i)

    if ((aa | bb) !== cc) {
      ans += cc === 1 ? 1 : aa + bb
    }
  }

  return ans
}
