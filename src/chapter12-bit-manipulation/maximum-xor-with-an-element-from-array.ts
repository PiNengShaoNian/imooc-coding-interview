type TreeNode = TreeNode[]

/**
 * typescript版本会内存溢出，其他语言的不会
 * @param nums 
 * @param queries 
 * @returns 
 */
export const maximizeXor = (nums: number[], queries: number[][]): number[] => {
  for (let i = 0; i < queries.length; ++i) {
    queries[i].push(i)
  }
  queries.sort((a, b) => a[1] - b[1])
  nums.sort((a, b) => a - b)
  const root: TreeNode = []

  let index = 0
  const ans: number[] = []

  for (let i = 0; i < queries.length; ++i) {
    const [xi, mi, idx] = queries[i]

    while (index < nums.length && nums[index] <= mi) {
      let node = root

      for (let mask = 1 << 30; mask > 0; mask >>= 1) {
        const t = (nums[index] & mask) === 0 ? 0 : 1

        if (!node[t]) {
          node[t] = []
        }
        node = node[t]
      }
      ++index
    }

    if (!root[0] && !root[1]) {
      ans[idx] = -1
      continue
    }
    let may = 0
    let node = root
    for (let mask = 1 << 30; mask > 0 && node; mask >>= 1) {
      const t = (xi & mask) === 0 ? 1 : 0

      if (!node[t]) {
        node = node[t ^ 1]
      } else {
        node = node[t]
        may |= mask
      }
    }
    ans[idx] = may
  }

  return ans
}
