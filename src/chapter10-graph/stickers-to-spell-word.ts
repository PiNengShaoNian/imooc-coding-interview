import { Queue } from '../util/queue'

export const minStickers = (stickers: string[], target: string): number => {
  const tmasks: number[] = Array.from({ length: 26 }, () => 0)
  const has: boolean[] = Array.from({ length: 26 }, () => false)
  const T = (1 << target.length) - 1

  const targetArr = [...target]
  targetArr.sort()
  for (let i = 0; i < targetArr.length; ++i) {
    tmasks[targetArr[i].charCodeAt(0) - 97] |= 1 << i
  }

  for (const str of stickers) {
    for (const char of str) {
      has[char.charCodeAt(0) - 97] = true
    }
  }

  for (let i = 0; i < tmasks.length; ++i) {
    if (!has[i] && tmasks[i]) return -1
  }

  stickers.sort((a, b) => b.length - a.length)

  const smasks: number[][] = Array.from({ length: stickers.length }, () => [])

  for (let i = 0; i < stickers.length; ++i) {
    const str = stickers[i]

    for (const char of str) {
      if (tmasks[char.charCodeAt(0) - 97]) {
        smasks[i].push(tmasks[char.charCodeAt(0) - 97])
      }
    }
  }

  const queue = new Queue<number>()
  queue.enqueue(0)
  const steps: number[] = Array.from({ length: 1 << target.length })
  steps[0] = 0
  for (;;) {
    let cur = queue.dequeue()!

    if (cur === null) return -1

    for (let i = 0; i < smasks.length; ++i) {
      let neighbor = cur
      for (const m of smasks[i]) {
        for (let bit = m & -m; m & bit; bit <<= 1) {
          if (!(neighbor & bit)) {
            neighbor |= bit
            break
          }
        }
      }

      if (neighbor === T) return steps[cur] + 1

      if (steps[neighbor] === undefined) {
        steps[neighbor] = steps[cur] + 1
        queue.enqueue(neighbor)
      }
    }
  }
}
