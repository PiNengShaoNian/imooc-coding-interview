import { TreeNode } from '../../chapter5-linked-list/linked-list-in-binary-tree'
import { longestUnivaluePath } from '../longest-univalue-path'

test('longestUnivaluePath', () => {
  const root1 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(1), new TreeNode(1)),
    new TreeNode(5, null, new TreeNode(5))
  )
  expect(longestUnivaluePath(root1)).toBe(2)
})
