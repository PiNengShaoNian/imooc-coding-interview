import { Queue } from '../util/queue'

export const canFinish = (
  numCourses: number,
  prerequisites: number[][]
): boolean => {
  const graph: Map<number, number[]> = new Map()
  const indegress = Array.from({ length: numCourses }, () => 0)
  for (let i = 0; i < prerequisites.length; ++i) {
    let adjacent = graph.get(prerequisites[i][1])

    if (!adjacent) {
      adjacent = []
    }

    adjacent.push(prerequisites[i][0])
    ++indegress[prerequisites[i][0]]

    graph.set(prerequisites[i][1], adjacent)
  }

  let ans = 0

  const queue = new Queue<number>()

  for (let i = 0; i < indegress.length; ++i) {
    if (indegress[i] === 0) {
      queue.enqueue(i)
    }
  }

  while (!queue.isEmpty()) {
    const cur = queue.dequeue()!
    const adj = graph.get(cur) ?? []

    ++ans
    for (const neighbor of adj) {
      if (--indegress[neighbor] === 0) {
        queue.enqueue(neighbor)
      }
    }
  }

  return ans === numCourses
}
