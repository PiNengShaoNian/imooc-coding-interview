export class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance?: number, subordinates?: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

export function getImportance(employees: Employee[], id: number): number {
  const visited: Set<number> = new Set()
  const mappingIdToEmployee = new Map<number, Employee>()

  for (let i = 0; i < employees.length; ++i) {
    mappingIdToEmployee.set(employees[i].id, employees[i])
  }
  let ans = 0
  const dfs = (id: number): void => {
    visited.add(id)

    const employee = mappingIdToEmployee.get(id)!
    ans += employee.importance

    for (let i = 0; i < employee.subordinates.length; ++i) {
      if (!visited.has(employee.subordinates[i])) {
        dfs(employee.subordinates[i])
      }
    }
  }

  dfs(id)

  return ans
}
