export const isPowerOfTwo = (n: number): boolean => {
  return n > 0 && ((n - 1) & n) === 0
}
 