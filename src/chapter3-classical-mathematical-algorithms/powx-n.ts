const pow = (x: number, n: number): number => {
  let ans = 1

  for (; n > 0; n = Math.floor(n / 2)) {
    if (n & 1) {
      ans *= x
    }
    x *= x
  }

  return ans
}

export function myPow(x: number, n: number): number {
  if (n < 0) return 1 / pow(x, -n)

  return pow(x, n)
}
