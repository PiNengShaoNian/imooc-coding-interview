import { TreeNode } from '../../chapter5-linked-list/linked-list-in-binary-tree'
import { buildTree } from '../construct-binary-tree-from-preorder-and-inorder-traversal'

test('buildTree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )

  const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(3)))

  const root2 = new TreeNode(1, null, new TreeNode(2))
  expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(root)
  expect(buildTree([1, 2, 3], [3, 2, 1])).toEqual(root1)
  expect(buildTree([1, 2], [1, 2])).toEqual(root2)
})
