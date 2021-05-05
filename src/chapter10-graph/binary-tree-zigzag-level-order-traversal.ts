import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'
import { Deque } from '../util/deque'

type NodeWithDepth = [TreeNode, number]
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []

  if (!root) return result

  const queue = new Deque<NodeWithDepth>()

  queue.addLast([root, 0])
  const result1: Deque<number>[] = []

  while (queue.size()) {
    const [node, depth] = queue.removeFront()!

    if (result1.length === depth) {
      result1[depth] = new Deque()
    }

    if (depth % 2 == 1) {
      result1[depth].addFront(node.val)
    } else {
      result1[depth].addLast(node.val)
    }
    if (node.left) {
      queue.addLast([node.left, depth + 1])
    }

    if (node.right) {
      queue.addLast([node.right, depth + 1])
    }
  }

  for (let i = 0; i < result1.length; i++) {
    result[i] = [...result1[i]]
  }

  return result
}
