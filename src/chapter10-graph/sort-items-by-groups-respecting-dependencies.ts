import { Queue } from '../util/queue'

export const sortItems = (
  n: number,
  _: number,
  group: number[],
  beforeItems: number[][]
): number[] => {
  const id = Array.from({ length: group.length }, () => -1)
  let curGroupId = 0

  for (let i = 0; i < group.length; ++i) {
    if (group[i] >= 0) {
      if (id[group[i]] < 0) {
        id[group[i]] = curGroupId++
      }
      group[i] = id[group[i]]
    }
  }

  for (let i = 0; i < group.length; ++i) {
    if (group[i] < 0) {
      group[i] = curGroupId++
    }
  }

  const topsort = (
    all: number[],
    indegress: number[],
    adjacent: Set<number>[]
  ): number[] => {
    const queue = new Queue<number>()
    const ans: number[] = []
    for (const x of all) {
      if (indegress[x] === 0) {
        queue.enqueue(x)
      }
    }

    while (queue.size()) {
      const cur = queue.dequeue()!
      const adj: Iterable<number> = adjacent[cur] ?? []
      ans.push(cur)
      for (let neighbor of adj) {
        if (--indegress[neighbor] === 0) {
          queue.enqueue(neighbor)
        }
      }

      adjacent[cur].clear()
    }

    adjacent

    return ans
  }

  const groups: number[][] = Array.from({ length: curGroupId }, () => [])
  const all: number[] = Array.from({ length: curGroupId }, (_, i) => i)
  const adjacent: Set<number>[] = Array.from({ length: n }, () => new Set())
  const indegress: number[] = Array.from({ length: n }, () => 0)

  for (let i = 0; i < n; ++i) {
    groups[group[i]].push(i)

    for (let b of beforeItems[i]) {
      if (group[b] !== group[i] && !adjacent[group[b]].has(group[i])) {
        adjacent[group[b]].add(group[i])
        ++indegress[group[i]]
      }
    }
  }

  const seq = topsort(all, indegress, adjacent)

  if (seq.length < curGroupId) return []

  const ans: number[] = []

  for (const groupId of seq) {
    for (const x of groups[groupId]) {
      for (const y of beforeItems[x]) {
        if (group[y] === groupId) {
          adjacent[y].add(x)
          ++indegress[x]
        }
      }
    }

    const temp = topsort(groups[groupId], indegress, adjacent)
    if (temp.length < groups[groupId].length) return []

    ans.push(...temp)
  }

  return ans
}
