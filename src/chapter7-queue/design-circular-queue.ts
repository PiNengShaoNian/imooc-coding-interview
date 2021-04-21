export class MyCircularQueue {
  private k: number
  private first = 0
  private last = 0
  private queue: number[] = []
  private size = 0
  constructor(k: number) {
    this.k = k
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false
    ++this.size
    this.queue[this.last] = value
    this.last = (this.last + 1) % this.k
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false

    ++this.first
    --this.size
    return true
  }

  Front(): number {
    if (this.isEmpty()) return -1
    return this.queue[this.first]
  }

  Rear(): number {
    if (this.isEmpty()) return -1
    const index = this.last === 0 ? this.k - 1 : this.last - 1
    return this.queue[index]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.k
  }
}
