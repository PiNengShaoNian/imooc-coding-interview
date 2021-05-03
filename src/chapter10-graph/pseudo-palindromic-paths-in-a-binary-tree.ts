import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

export const pseudoPalindromicPaths = (root: TreeNode | null): number => {
  if (root === null) return 0

  const dfs = (root: TreeNode | null, state: number, odd: number): number => {
    if (!root) return 0
    const mask = 1 << (root.val - 1)

    if ((mask & state) === 0) {
      ++odd
    } else {
      --odd
    }
    state ^= mask

    if (root.left === null && root.right === null) {
      return odd < 2 ? 1 : 0
    }

    return dfs(root.left, state, odd) + dfs(root.right, state, odd)
  }

  return dfs(root, 0, 0)
}
