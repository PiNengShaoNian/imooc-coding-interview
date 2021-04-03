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

export function isSubPath(
  head: ListNode | null,
  root: TreeNode | null
): boolean {
  const memo: Map<TreeNode, boolean> = new Map()
  const core = (head: ListNode | null, root: TreeNode | null): boolean => {
    if (head === null && root === null) return true
    if (head === null || root === null) return false

    if (memo.has(root)) return memo.get(root)!

    let ans = false
    if (head.val === root.val) {
      ans =
        isSubPath(head.next, root.left) ||
        isSubPath(head.next, root.right) ||
        isSubPath(head, root.left) ||
        isSubPath(head, root.right)
    } else {
      ans = isSubPath(head, root.left) || isSubPath(head, root.right)
    }

    memo.set(root, ans)
    return ans
  }

  return core(head, root)
}
