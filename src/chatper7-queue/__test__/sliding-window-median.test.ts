import { medianSlidingWindow } from '../sliding-window-median'

test('medianSlidingWindow', () => {
  expect(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
    1,
    -1,
    -1,
    3,
    5,
    6,
  ])
  expect(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 4)).toEqual([
    0,
    1,
    1,
    4,
    5.5,
  ])

  expect(medianSlidingWindow([1], 1)).toEqual([1])
  expect(medianSlidingWindow([1, 2], 1)).toEqual([1, 2])
  expect(medianSlidingWindow([-1, 2], 1)).toEqual([-1, 2])
  expect(medianSlidingWindow([-1, 2], 2)).toEqual([0.5])
})
