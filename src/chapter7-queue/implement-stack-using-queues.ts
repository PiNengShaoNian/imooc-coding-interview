import { Queue } from '../util/queue'

export class MyStack {
  private queue: Queue<number> = new Queue()
  constructor() {}

  push(x: number): void {
    this.queue.enqueue(x)

    const size = this.queue.size()

    for (
      let i = 0;
      i < size - 1;
      ++i, this.queue.enqueue(this.queue.dequeue()!)
    );
  }

  pop(): number {
    return this.queue.dequeue() ?? -1
  }

  top(): number {
    if (this.empty()) return -1

    const res = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.queue.isEmpty()
  }
}
