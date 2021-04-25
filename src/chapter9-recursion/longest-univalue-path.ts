import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

export function longestUnivaluePath(root: TreeNode | null): number {
  let ans = 0

  const dfs = (root: TreeNode | null): number => {
    if (!root) return 0

    let left = dfs(root.left)
    let right = dfs(root.right)

    if (root.right && root.right.val === root.val) {
      ++right
    } else {
      right = 0
    }

    if (root.left && root.left.val === root.val) {
      ++left
    } else {
      left = 0
    }

    ans = Math.max(ans, left + right)

    return Math.max(left, right)
  }

  dfs(root)

  return ans
}
