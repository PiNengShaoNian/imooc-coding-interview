import { Employee, getImportance } from '../employee-importance'

test('getImportance', () => {
  expect(
    getImportance(
      [
        new Employee(1, 5, [2, 3]),
        new Employee(2, 3, []),
        new Employee(3, 3, []),
      ],
      1
    )
  ).toBe(11)
})
