export function nthMagicalNumber(n: number, a: number, b: number): number {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
  }

  const lcm = (a: number, b: number): number => {
    return (a / gcd(a, b)) * b
  }

  let left = 1
  let right = n * a

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (
      Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm(a, b)) >=
      n
    ) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left % 1000000007
}
