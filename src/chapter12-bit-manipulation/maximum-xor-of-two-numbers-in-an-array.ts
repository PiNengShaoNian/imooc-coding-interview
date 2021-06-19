class TreeNode {
  next: TreeNode[] = []
}

export const findMaximumXOR = (nums: number[]): number => {
  const root = new TreeNode()
  let node: TreeNode
  for (const num of nums) {
    node = root
    for (let mask = 1 << 30; mask > 0; mask >>= 1) {
      const t = (mask & num) === 0 ? 0 : 1

      if (!node.next[t]) {
        node.next[t] = new TreeNode()
      }
      node = node.next[t]
    }
  }

  let ans = 0
  for (const num of nums) {
    node = root
    let may = 0
    for (let mask = 1 << 30; mask > 0 && node; mask >>= 1) {
      const t = (mask & num) === 0 ? 1 : 0

      if (node.next[t]) {
        may |= mask
        node = node.next[t]
      } else {
        node = node.next[t ^ 1]
      }
    }

    ans = Math.max(may, ans)
  }

  return ans
}
