class MyStack {
  private s: number[] = []

  push(x: number) {
    this.s.push(x)
  }

  pop(): number | undefined {
    return this.s.pop()
  }

  peek(): number | undefined {
    return this.s[this.s.length - 1]
  }

  empty(): boolean {
    return this.s.length === 0
  }
}

export class MyQueue {
  private stackIn: MyStack = new MyStack()
  private stackOut: MyStack = new MyStack()

  constructor() {}

  push(x: number): void {
    this.stackIn.push(x)
  }

  private transferElem() {
    while (!this.stackIn.empty()) {
      this.stackOut.push(this.stackIn.pop()!)
    }
  }

  pop(): number {
    if (this.empty()) return -1

    if (this.stackOut.empty()) {
      this.transferElem()
    }

    return this.stackOut.pop()!
  }

  peek(): number {
    if (this.stackOut.empty()) {
      this.transferElem()
    }

    return this.stackOut.peek() ?? -1
  }

  empty(): boolean {
    return this.stackOut.empty() && this.stackIn.empty()
  }
}
