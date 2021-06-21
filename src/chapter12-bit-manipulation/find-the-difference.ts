export const findTheDifference = (s: string, t: string): string => {
  let r = 0

  for (let i = 0; i < s.length; ++i) {
    r ^= s.charCodeAt(i)
  }

  for (let i = 0; i < t.length; ++i) {
    r ^= t.charCodeAt(i)
  }

  return String.fromCharCode(r)
}
