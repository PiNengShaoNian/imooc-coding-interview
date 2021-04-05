import { ListNode } from './LinkedList'

/**
 * 左闭右开反转一个链表
 * @param l 左边界
 * @param r 有边界
 * @returns
 */
const reverse = (l: ListNode, r: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null
  let next: ListNode | null = null
  let cur: ListNode = l

  while (cur !== r) {
    next = cur.next!

    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
export const reverseBetween = (
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null => {
  if (!head) return head
  let leftNode: ListNode = head
  let before: ListNode | null = null

  for (let i = 1; i < left; ++i) {
    before = leftNode
    leftNode = leftNode.next!
  }

  let rightNode: ListNode | null = leftNode
  //左闭右开区间，需要向前多移一位
  for (let i = 0; i < right - left + 1; ++i) {
    rightNode = rightNode.next!
  }

  const reversed = reverse(leftNode, rightNode)

  //当head为null时，或者左右区间相等时reversed为null,什么都不用做,直接返回head
  if (!reversed) return head
  //left为1,before为null,此时head为反转区间的尾节点
  else if (!before) {
    head.next = rightNode
    return reversed
  }
  //反转区间在中间此时leftNode为反转区间的尾节点
  else {
    leftNode.next = rightNode
    before.next = reversed
    return head
  }
}
