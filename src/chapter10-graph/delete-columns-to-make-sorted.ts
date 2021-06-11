export function minDeletionSize(strs: string[]): number {
  const rows = strs.length
  const cols = strs[0].length
  let ans = 0
  mainLoop: for (let col = 0; col < cols; ++col) {
    let prev = strs[0][col]
    for (let row = 1; row < rows; ++row) {
      let char = strs[row][col]
      if (char < prev) {
        ++ans
        continue mainLoop
      } else {
        prev = char
      }
    }
  }

  return ans
}
