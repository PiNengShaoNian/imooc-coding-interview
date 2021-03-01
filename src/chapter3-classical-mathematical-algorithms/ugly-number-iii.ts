export function nthUglyNumber(
  n: number,
  a: number,
  b: number,
  c: number
): number {
  let lo = 0
  let hi = Math.min(a, Math.min(b, c)) * n
  let abLCM = lcm(a, b)
  let bcLCM = lcm(b, c)
  let acLCM = lcm(a, c)
  let abcLCM = lcm(abLCM, c)
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    let count =
      Math.floor(mid / a) +
      Math.floor(mid / b) +
      Math.floor(mid / c) -
      Math.floor(mid / abLCM) -
      Math.floor(mid / acLCM) -
      Math.floor(mid / bcLCM) +
      Math.floor(mid / abcLCM)

    if (count >= n) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return lo
}

const gcd = (x: number, y: number): number => {
  return y <= 0 ? x : gcd(y, x % y)
}

const lcm = (x: number, y: number): number => {
  return (x * y) / gcd(x, y)
}
