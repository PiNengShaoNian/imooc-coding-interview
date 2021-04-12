export const largestRectangleArea = (heights: number[]): number => {
  let ans = 0
  const stack: number[] = []

  for (let i = 0; i < heights.length; ++i) {
    for (; stack.length && heights[stack[stack.length - 1]] >= heights[i]; ) {
      ans = Math.max(
        ans,
        heights[stack.pop()!] *
          (i - (stack.length ? stack[stack.length - 1] : -1) - 1)
      )
    }
    stack.push(i)
  }

  while (stack.length) {
    ans = Math.max(
      ans,
      heights[stack.pop()!] *
        (heights.length - (stack.length ? stack[stack.length - 1] : -1) - 1)
    )
  }

  return ans
}
