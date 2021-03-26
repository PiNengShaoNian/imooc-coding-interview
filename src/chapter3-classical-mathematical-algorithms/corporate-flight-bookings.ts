export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const ans = Array.from({ length: n }, () => 0)

  for (let i = 0; i < bookings.length; ++i) {
    const booking = bookings[i]

    ans[booking[0] - 1] += booking[2]

    if (booking[1] < n) ans[booking[1]] -= booking[2]
  }

  for (let i = 1; i < n; ++i) {
    ans[i] += ans[i - 1]
  }

  return ans
}
