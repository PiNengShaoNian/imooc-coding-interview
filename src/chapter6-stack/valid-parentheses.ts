export function isValid(s: string): boolean {
  const stack: string[] = []

  for (let i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case '[':
      case '{':
      case '(':
        stack.push(s[i])
        break
      case ')':
        if (!stack.length || stack.pop() !== '(') return false
        break

      case ']':
        if (!stack.length || stack.pop() !== '[') return false
        break
      case '}':
        if (!stack.length || stack.pop() !== '{') return false
        break
    }
  }
  
  return !stack.length
}
