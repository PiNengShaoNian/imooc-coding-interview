import { MinHeap } from '../util/min-heap'

class Stuff {
  constructor(public speed: number, public efficiency: number) {}
}

export const maxPerformance = (
  n: number,
  speed: number[],
  efficiency: number[],
  k: number
): number => {
  const stuffs: Stuff[] = Array.from(
    { length: n },
    (_, i) => new Stuff(speed[i], efficiency[i])
  )

  stuffs.sort((a, b) => b.efficiency - a.efficiency)
  const minPQ = new MinHeap<number>()

  let sum = 0n
  let ans = 0n
  for (let i = 0; i < n; ++i) {
    const minE = BigInt(stuffs[i].efficiency)

    sum += BigInt(stuffs[i].speed)
    ans = ans > sum * minE ? ans : sum * minE

    minPQ.insert(stuffs[i].speed)

    if (minPQ.size() === k) {
      sum -= BigInt(minPQ.deleteMin())
    }
  }

  return Number(ans % BigInt(1e9 + 7)).valueOf()
}
