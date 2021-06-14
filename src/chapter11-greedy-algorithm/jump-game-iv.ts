import { Queue as MyQueue, Queue } from '../util/queue'

export const minJumps = (arr: number[]): number => {
  const all: Map<number, number[]> = new Map()
  const visited: number[] = Array.from({ length: arr.length }, () => -1)
  const queue = new Queue<number>()
  for (let i = 0; i < arr.length; ++i) {
    const list = all.get(arr[i]) ?? []

    list.push(i)

    all.set(arr[i], list)
    visited[i] = -1
  }

  queue.enqueue(0)

  for (visited[0] = 0; visited[arr.length - 1] < 0; ) {
    const cur = queue.dequeue()!

    if (cur - 1 > 0 && visited[cur - 1] < 0) {
      queue.enqueue(cur - 1)
      visited[cur - 1] = visited[cur] + 1
    }

    if (cur + 1 < arr.length && visited[cur + 1] < 0) {
      queue.enqueue(cur + 1)
      visited[cur + 1] = visited[cur] + 1
    }

    const neighbors = all.get(arr[cur])

    if (!neighbors) continue

    for (const neighbor of neighbors) {
      if (visited[neighbor] < 0) {
        queue.enqueue(neighbor)
        visited[neighbor] = visited[cur] + 1
      }
    }

    all.delete(arr[cur])
  }

  return visited[arr.length - 1]
}
