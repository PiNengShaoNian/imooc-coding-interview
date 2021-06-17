export const getSum = (a: number, b: number): number => {
  return a === 0 ? b : getSum((a & b) << 1, a ^ b)
}
