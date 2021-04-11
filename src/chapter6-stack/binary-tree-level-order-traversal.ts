import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

class LoopQueue<E> {
  private data: E[] = []

  private first = 0
  private last = 0
  private _size = 0

  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this.first === this.last
  }

  private resize() {
    const newQueue: E[] = []

    for (let i = 0; i < this._size; i++) {
      newQueue[i] = this.data[i + this.first]
    }

    this.data = newQueue
    this.first = 0
    this.last = this._size
  }

  enqueue(e: E): void {
    this.data[this.last] = e
    this.last++
    this._size++
  }
  front(): E | null {
    if (this.isEmpty()) return null

    return this.data[this.first]
  }

  getLoadFactor() {
    return (this.last - this.first) / this.data.length
  }

  dequeue(): E | null {
    if (this.isEmpty()) return null

    const ret = this.data[this.first]
    this.first++
    this._size--
    if (this.getLoadFactor() <= 0.25 && this.data.length > 1) {
      this.resize()
    }
    return ret
  }

  *[Symbol.iterator]() {
    for (let i = this.first; i < this.last; i++) {
      yield this.data[i]
    }
  }
}

type NodeWithLevel = [TreeNode, number]

export function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = []

  if (!root) return result

  const queue = new LoopQueue<NodeWithLevel>()

  queue.enqueue([root, 0])

  while (queue.size()) {
    const [node, level] = queue.dequeue()!

    if (level === result.length) {
      result[level] = []
    }

    result[level].push(node.val)

    if (node.left) {
      queue.enqueue([node.left, level + 1])
    }

    if (node.right) {
      queue.enqueue([node.right, level + 1])
    }
  }

  return result
}
