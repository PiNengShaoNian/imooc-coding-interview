import {
  binarySearch,
  getPeak,
  findInMountainArray,
} from '../find-in-mountain-array'

class MountainArray {
  constructor(private arr: number[]) {}
  get(index: number): number {
    return this.arr[index]
  }

  length(): number {
    return this.arr.length
  }
}

test('findInMountainArray', () => {
  expect(getPeak(0, 6, new MountainArray([1, 2, 3, 4, 5, 3, 1]))).toBe(4)
  expect(getPeak(0, 5, new MountainArray([0, 1, 2, 4, 2, 1]))).toBe(3)
  expect(getPeak(0, 4, new MountainArray([0, 1, 1, 2, 1]))).toBe(3)
  expect(getPeak(0, 2, new MountainArray([0, 1, 0]))).toBe(1)

  expect(binarySearch(0, 3, new MountainArray([0, 1, 2, 3]), false, 3)).toBe(3)
  expect(binarySearch(0, 3, new MountainArray([0, 1, 2, 3]), false, 2)).toBe(2)
  expect(binarySearch(0, 3, new MountainArray([0, 1, 1, 3]), false, 1)).toBe(1)
  expect(binarySearch(0, 3, new MountainArray([1, 1, 1, 1]), false, 1)).toBe(0)
  expect(binarySearch(0, 4, new MountainArray([1, 1, 1, 1, 2]), false, 2)).toBe(
    4
  )
  expect(
    binarySearch(0, 6, new MountainArray([1, 1, 1, 1, 2, 2, 2]), false, 2)
  ).toBe(4)

  expect(binarySearch(0, 2, new MountainArray([3, 2, 1]), true, 3)).toBe(0)
  expect(binarySearch(0, 2, new MountainArray([3, 2, 1]), true, 2)).toBe(1)
  expect(binarySearch(0, 2, new MountainArray([3, 2, 1]), true, 1)).toBe(2)
  expect(binarySearch(0, 4, new MountainArray([3, 2, 1, 1, 1]), true, 1)).toBe(
    4
  )
  expect(binarySearch(0, 3, new MountainArray([3, 2, 2, 1]), true, 2)).toBe(2)
})
