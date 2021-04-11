import { preorderTraversal } from '../binary-tree-preorder-traversal'
import { buildTree } from '../construct-binary-tree-from-inorder-and-postorder-traversal'

test('buildTree', () => {
  expect(
    preorderTraversal(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
  ).toEqual([3, 9, 20, 15, 7])
  expect(preorderTraversal(buildTree([2, 3, 1], [3, 2, 1]))).toEqual([1, 2, 3])
})
