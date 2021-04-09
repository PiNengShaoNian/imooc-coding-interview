export function calPoints(ops: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < ops.length; ++i) {
    switch (ops[i]) {
      case 'C':
        stack.pop()
        break
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break
      case 'D':
        stack.push(stack[stack.length - 1] * 2)
        break
      default:
        stack.push(+ops[i])
    }
  }

  let ans = 0

  for (let i = 0; i < stack.length; ++i) {
    ans += stack[i]
  }

  return ans
}
