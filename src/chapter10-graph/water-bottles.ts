export function numWaterBottles(
  numBottles: number,
  numExchange: number
): number {
  let ans = 0

  while (numBottles >= numExchange) {
    const x = numBottles % numExchange
    ans += numBottles - x
    numBottles = Math.floor(numBottles / numExchange) + x
  }

  return ans + numBottles
}
