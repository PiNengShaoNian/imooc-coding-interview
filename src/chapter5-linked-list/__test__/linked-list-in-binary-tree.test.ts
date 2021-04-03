import { isSubPath, TreeNode } from '../linked-list-in-binary-tree'
import { buildLinkedList, ListNode } from '../LinkedList'

export const buildTreeFromArray = (arr: (number | null)[]): TreeNode | null => {
  const buildNodeAtIndex = (index: number): TreeNode | null => {
    const val = arr[index]
    if (typeof val === 'number') {
      const root = new TreeNode(val)
      root.left = buildNodeAtIndex(index * 2 + 1)
      root.right = buildNodeAtIndex(index * 2 + 2)

      return root
    } else return null
  }
  return buildNodeAtIndex(0)
}

test('isSubPath', () => {
  const tree1 = buildTreeFromArray([
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ])
  const list1 = buildLinkedList([4, 2, 8])

  expect(isSubPath(list1, tree1)).toBeTruthy()


  const tree2 = buildTreeFromArray([
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ])
  const list2 = buildLinkedList([1, 4, 2, 6])
  expect(isSubPath(list2, tree2)).toBeTruthy()

  const tree3 = buildTreeFromArray([
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ])
  const list3 = buildLinkedList([1, 4, 2, 6, 8])

  expect(isSubPath(list3, tree3)).toBeFalsy()
  expect(isSubPath(null, null)).toBeTruthy()
  expect(isSubPath(null, new TreeNode(1))).toBeFalsy()
  expect(isSubPath(new ListNode(1), null)).toBeFalsy()
  expect(isSubPath(new ListNode(1), new TreeNode(1))).toBeTruthy()
})
