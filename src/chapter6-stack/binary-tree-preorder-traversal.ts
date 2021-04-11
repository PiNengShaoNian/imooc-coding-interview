import { TreeNode } from '../chapter5-linked-list/linked-list-in-binary-tree'

type Command = {
  command: 'GO' | 'PRINT'
  node: TreeNode
}

export const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return []
  const ans: number[] = []
  const commands: Command[] = []
  commands.push({
    node: root,
    command: 'GO',
  })

  while (commands.length) {
    const { command, node } = commands.pop()!

    if (command === 'GO') {
      node.right &&
        commands.push({
          node: node.right,
          command: 'GO',
        })
      node.left &&
        commands.push({
          node: node.left,
          command: 'GO',
        })
      commands.push({
        node,
        command: 'PRINT',
      })
    } else if (command === 'PRINT') {
      ans.push(node.val)
    }
  }

  return ans
}
