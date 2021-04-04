import { ListNode } from './LinkedList'

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const dfs = (head: ListNode | null, root: TreeNode | null): boolean => {
  if (head === null) return true
  if (root === null) return false

  if (head.val === root.val) {
    return dfs(head.next, root.left) || dfs(head.next, root.right)
  } else {
    return false
  }
}

export function isSubPath(
  head: ListNode | null,
  root: TreeNode | null
): boolean {
  if (root === null) return false

  return (
    dfs(head, root) ||
    isSubPath(head, root?.left ?? null) ||
    isSubPath(head, root?.right ?? null)
  )
}
