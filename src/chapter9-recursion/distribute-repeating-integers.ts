export const canDistribute = (nums: number[], quantity: number[]): boolean => {
  let map = Array.from({ length: 1001 }, () => 0)
  for (let i = 0; i < nums.length; ++i) {
    ++map[nums[i]]
  }

  map.sort((a, b) => a - b)
  map = Array.from({ length: 50 }, (_, i) => map[map.length - 50 + i])
  quantity.sort((a, b) => a - b)

  const core = (index: number): boolean => {
    if (index < 0) return true

    for (let i = 0; i < map.length; ++i) {
      if (i !== 0 && map[i] === map[i - 1]) continue
      if (map[i] >= quantity[index]) {
        map[i] -= quantity[index]
        if (core(index - 1)) return true
        map[i] += quantity[index]
      }
    }

    return false
  }

  return core(quantity.length - 1)
}
