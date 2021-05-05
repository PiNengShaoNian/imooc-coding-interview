import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

export const buildTree = (
  preorder: number[],
  inorder: number[]
): TreeNode | null => {
  const map: Map<number, number> = new Map()

  for (let i = 0; i < inorder.length; ++i) {
    map.set(inorder[i], i)
  }
  const core = (
    preorderLeft: number,
    preorderRight: number,
    inorderLeft: number,
    inorderRight: number
  ): null | TreeNode => {
    if (preorderLeft > preorderRight) {
      return null
    }

    const rootVal = preorder[preorderLeft]
    const root = new TreeNode(rootVal)
    let inorderRoot = map.get(rootVal)!

    const leftTreeSize = inorderRoot - inorderLeft

    root.left = core(
      preorderLeft + 1,
      preorderLeft + leftTreeSize,
      inorderLeft,
      inorderRoot - 1
    )
    root.right = core(
      preorderLeft + 1 + leftTreeSize,
      preorderRight,
      inorderRoot + 1,
      inorderRight
    )

    return root
  }

  return core(0, preorder.length - 1, 0, inorder.length - 1)
}
