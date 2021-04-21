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

export class RecentCounter {
  private data: LoopQueue<number> = new LoopQueue()

  constructor() {}

  ping(t: number): number {
    this.data.enqueue(t)

    for (
      ;
      this.data.size() && this.data.front()! < t - 3000;
      this.data.dequeue()
    );

    return this.data.size()
  }
}
