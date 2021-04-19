import { Queue } from '../util/queue'

export const canReach = (arr: number[], start: number): boolean => {
  if (start === 0) return true
  const queue = new Queue<number>()
  const visited = new Set<number>()

  queue.enqueue(start)
  while (!queue.isEmpty()) {
    const index = queue.dequeue()!

    visited.add(index)

    for (let i = 0; i < 2; ++i) {
      const next = index + (i === 0 ? -arr[index] : arr[index])

      if (next < arr.length && next >= 0) {
        if (arr[next] === 0) return true
        if (visited.has(next)) continue

        queue.enqueue(next)
      }
    }
  }

  return false
}
