import { ListNode } from './LinkedList'

export class MyLinkedList {
  constructor() {}
  private _size = 0
  private head: ListNode | null = null
  private tail: ListNode | null = null
  size(): number {
    return this._size
  }

  get(index: number): number {
    if (!this.validateIndex(index)) return -1

    let target: ListNode = this.head!

    for (let i = 0; i < index; ++i) {
      target = target.next!
    }

    return target!.val
  }

  addAtHead(val: number): void {
    if (this.head === null) {
      this.head = this.tail = new ListNode(val)
    } else {
      const newHead = new ListNode(val)
      newHead.next = this.head
      this.head = newHead
    }
    ++this._size
  }

  first(): ListNode | null {
    return this.head
  }

  last(): ListNode | null {
    return this.tail
  }

  addAtTail(val: number): void {
    if (this.tail === null) {
      this.head = this.tail = new ListNode(val)
    } else {
      const newTail = new ListNode(val)
      this.tail.next = newTail
      this.tail = newTail
    }

    ++this._size
  }

  validateIndex(index: number): boolean {
    if (index >= 0 && index < this._size) return true
    else return false
  }

  addAtIndex(index: number, val: number): void {
    if (index === this._size) {
      this.addAtTail(val)
      return
    }
    if (index === 0) {
      this.addAtHead(val)
      return
    }

    if (!this.validateIndex(index)) return

    let before: ListNode = this.head!
    for (let i = 1; i < index; ++i) {
      before = before.next!
    }

    const newNode = new ListNode(val)
    const after: ListNode | null = before.next
    newNode.next = after
    before.next = newNode
    this._size++
  }

  deleteAtIndex(index: number): void {
    if (!this.validateIndex(index)) return

    const dummy = new ListNode(-1)
    dummy.next = this.head
    let target: ListNode = this.head!
    let pre: ListNode = dummy

    for (let i = 0; i < index; ++i) {
      target = target.next!
      pre = pre.next!
    }

    pre.next = pre.next!.next ?? null

    this.head = dummy.next

    --this._size
    if (index === this._size) {
      this.tail = pre
    }
    if (this._size === 0) {
      this.tail = this.head = null
    }
  }

  *[Symbol.iterator]() {
    for (let node = this.head; node; node = node.next) {
      yield node.val
    }
  }
}
