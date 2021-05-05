export const pathInZigZagTree = (label: number): number[] => {
  let layer = 1

  for (; layer <= label; layer <<= 1);

  const ans = []

  for (; layer >= 2; layer >>= 1) {
    ans.push(label)
    label = Math.floor((layer - 1 + (layer >> 1) - label) / 2)
  }

  ans.reverse()
  return ans
}
