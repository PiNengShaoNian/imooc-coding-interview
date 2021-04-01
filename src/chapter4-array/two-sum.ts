export const twoSum = (nums: number[], target: number): [number, number] => {
  const have: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; ++i) {
    const result = have.get(target - nums[i])

    if (result !== undefined) return [result, i]
    have.set(nums[i], i)
  }

  return [-1, -1]
}
