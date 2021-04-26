import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

export const allPossibleFBT = (n: number): Array<TreeNode | null> => {
  if (n === 0) return []

  if (n === 1) return [new TreeNode(0)]
  const ans: TreeNode[] = []

  for (let i = 1; i <= n - 2; i += 2) {
    const left = allPossibleFBT(i)
    const right = allPossibleFBT(n - i - 1)

    for (let k = 0; k < left.length; ++k) {
      for (let j = 0; j < right.length; ++j) {
        const root = new TreeNode(0)
        root.left = left[k]
        root.right = right[j]
        ans.push(root)
      }
    }
  }

  return ans
}
