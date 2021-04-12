export const dailyTemperatures = (T: number[]): number[] => {
  const ans: number[] = Array.from({ length: T.length })
  const stack: number[] = []

  for (let i = T.length - 1; i >= 0; --i) {
    for (; stack.length && T[stack[stack.length - 1]] <= T[i]; stack.pop());

    ans[i] = (stack.length ? stack[stack.length - 1] : i) - i
    stack.push(i)
  }

  return ans
}
