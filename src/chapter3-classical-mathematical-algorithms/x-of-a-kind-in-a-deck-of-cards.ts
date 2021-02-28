const gcd = (x: number, y: number): number => {
  return y <= 0 ? x : gcd(y, x % y)
}

export function hasGroupsSizeX(deck: number[]): boolean {
  const freq: number[] = Array.from({ length: 10004 }, () => 0)

  for (let i = 0; i < deck.length; ++i) {
    ++freq[deck[i]]
  }

  let g = 0
  for (let i = 0; i < freq.length; ++i) {
    g = gcd(g, freq[i])

    if (g === 1) return false
  }

  return true
}
