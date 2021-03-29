export const average = (salary: number[]) => {
  let sum = 0
  let max = -Infinity
  let min = Infinity

  for (let i = 0; i < salary.length; ++i) {
    sum += salary[i]
    max = Math.max(max, salary[i])
    min = Math.min(min, salary[i])
  }

  return (sum - max - min) / (salary.length - 2)
}
