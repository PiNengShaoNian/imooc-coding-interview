import { TreeNode } from '../../chapter5-linked-list/linked-list-in-binary-tree'
import { preorderTraversal } from '../binary-tree-preorder-traversal'

test('preorderTraversal', () => {
  const tree1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(5)
  )

  expect(preorderTraversal(tree1)).toEqual([1, 2, 3, 4, 5])

  const tree2 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

  expect(preorderTraversal(tree2)).toEqual([1, 2, 3])

  const tree3 = new TreeNode(1, new TreeNode(2))
  expect(preorderTraversal(tree3)).toEqual([1, 2])
})
