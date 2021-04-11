import { TreeNode } from '../../chapter5-linked-list/linked-list-in-binary-tree'
import { postorderTraversal } from '../binary-tree-postorder-traversal'

test('postorderTraversal', () => {
  const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

  expect(postorderTraversal(tree1)).toEqual([3, 2, 1])
})
