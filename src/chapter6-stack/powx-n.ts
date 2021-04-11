const pow = (x: number, n: number): number => {
  const stack: number[] = []

  for (
    stack.push(n);
    stack[stack.length - 1] > 1;
    stack.push(stack[stack.length - 1] >> 1)
  );

  let r = x
  for (stack.pop(); !stack.length; ) {
    r *= r
    if (stack.pop()! % 2 === 1) {
      r *= x
    }
  }

  return r
}

const myPow = (x: number, n: number): number => {
  if (n === 0) return 1

  let m = n

  return m < 0 ? 1 / pow(x, -m) : pow(x, m)
}
