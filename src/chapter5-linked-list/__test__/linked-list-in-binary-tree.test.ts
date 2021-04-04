import { isSubPath, TreeNode } from '../linked-list-in-binary-tree'
import { buildLinkedList, ListNode } from '../LinkedList'

test('isSubPath', () => {
  const tree1 = new TreeNode(
    1,
    new TreeNode(4, null, new TreeNode(2, new TreeNode(1), null)),
    new TreeNode(
      4,
      new TreeNode(
        2,
        new TreeNode(6),
        new TreeNode(8, new TreeNode(1), new TreeNode(3))
      ),
      null
    )
  )
  const list1 = buildLinkedList([4, 2, 8])

  expect(isSubPath(list1, tree1)).toBeTruthy()
})
