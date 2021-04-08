import { ListNode } from './LinkedList'

const consume = (
  head: ListNode | null,
  container: (ListNode | null)[],
  k: number
): ListNode | null => {
  const list = new ListNode(-1)
  let tail = list
  let prev: ListNode | null = null
  for (let i = 0; i < k && head; ++i) {
    tail = tail.next = head
    prev = head
    head = head.next
  }

  if (prev) prev.next = null
  container.push(list.next)
  return head
}

export function splitListToParts(
  root: ListNode | null,
  k: number
): Array<ListNode | null> {
  const tasks: [number, number][] = []
  let length = 0

  let head = root
  for (; head; head = head.next, ++length);

  if (length / k <= 1) {
    tasks.push([1, length / 1], [0, k - length])
  } else if (Number.isInteger(length / k)) {
    tasks.push([length / k, k])
  } else {
    const maxSegmentLength = Math.ceil(length / k)
    let remaingLength = length - maxSegmentLength
    let remaingSegments = k - 1
    tasks.push([maxSegmentLength, 1])
    while (!Number.isInteger(remaingLength / remaingSegments)) {
      ++tasks[0][1]
      remaingLength -= maxSegmentLength
      --remaingSegments
    }

    tasks.push([maxSegmentLength - 1, remaingSegments])
  }

  let ans: (ListNode | null)[] = []
  for (let i = 0; i < tasks.length; ++i) {
    const [segmentLength, count] = tasks[i]

    for (let j = 0; j < count; ++j) {
      root = consume(root, ans, segmentLength)
    }
  }

  return ans
}
