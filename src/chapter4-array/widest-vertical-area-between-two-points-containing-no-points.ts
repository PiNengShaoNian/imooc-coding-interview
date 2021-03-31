export const maxWidthOfVerticalArea = (points: number[][]): number => {
  let min = points[0][0]
  let max = min

  for (let i = 0; i < points.length; ++i) {
    min = Math.min(points[i][0], min)
    max = Math.max(points[i][0], max)
  }

  if (max === min) return 0
  const distance = max - min
  const segments: [number, number][] = Array.from({ length: points.length + 1 })

  for (let i = 0; i < points.length; ++i) {
    const [x] = points[i]

    const segmentIndex = Math.floor(((x - min) * points.length) / distance)
    if (!segments[segmentIndex]) {
      segments[segmentIndex] = [x, x]
    } else {
      segments[segmentIndex][0] = Math.min(x, segments[segmentIndex][0])
      segments[segmentIndex][1] = Math.max(x, segments[segmentIndex][1])
    }
  }

  let ans = 0

  for (let i = 1, last = segments[0][1]; i <= points.length; ++i) {
    if (!segments[i]) continue
    ans = Math.max(ans, segments[i][0] - last)
    last = segments[i][1]
  }

  return ans
}
