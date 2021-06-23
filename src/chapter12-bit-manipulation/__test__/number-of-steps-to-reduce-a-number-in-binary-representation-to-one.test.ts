import {
  numSteps,
  numSteps1,
} from '../number-of-steps-to-reduce-a-number-in-binary-representation-to-one'

test('numSteps', () => {
  expect(numSteps('1101')).toBe(6)
  expect(numSteps('10')).toBe(1)
  expect(numSteps('1')).toBe(0)

  expect(numSteps1('1101')).toBe(6)
  expect(numSteps1('10')).toBe(1)
  expect(numSteps1('1')).toBe(0)
})
