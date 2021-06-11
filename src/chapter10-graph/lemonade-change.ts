export function lemonadeChange(bills: number[]): boolean {
  let five = 0
  let ten = 0

  for (let i = 0; i < bills.length; ++i) {
    if (bills[i] === 5) {
      ++five
    } else if (bills[i] === 10) {
      if (five >= 1) {
        --five
        ++ten
      } else return false
    } else if (bills[i] === 20) {
      if (ten >= 1 && five >= 1) {
        --ten
        --five
      } else if (five >= 3) {
        five -= 3
      } else return false
    }
  }

  return true
}
