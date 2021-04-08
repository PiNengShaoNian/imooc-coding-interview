import { buildLinkedList } from '../LinkedList'
import { splitListToParts } from '../split-linked-list-in-parts'

test('splitListToParts', () => {
  expect(
    splitListToParts(buildLinkedList([1, 2, 3]), 5).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([[1], [2], [3], [], []])

  expect(
    splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3).map(
      (v) => {
        if (v === null) return []
        else return [...v]
      }
    )
  ).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ])

  expect(
    splitListToParts(buildLinkedList([1]), 1).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([[1]])

  expect(
    splitListToParts(null, 3).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([[], [], []])

  expect(
    splitListToParts(null, 1).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([[]])

  expect(
    splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2).map(
      (v) => {
        if (v === null) return []
        else return [...v]
      }
    )
  ).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ])

  expect(
    splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11).map(
      (v) => {
        if (v === null) return []
        else return [...v]
      }
    )
  ).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], []])
  expect(
    splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10).map(
      (v) => {
        if (v === null) return []
        else return [...v]
      }
    )
  ).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])

  expect(
    splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4).map(
      (v) => {
        if (v === null) return []
        else return [...v]
      }
    )
  ).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [9, 10],
  ])

  expect(
    splitListToParts(
      buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      4
    ).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11],
  ])

  expect(
    splitListToParts(
      buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
      2
    ).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13],
  ])

  expect(
    splitListToParts(
      buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
      4
    ).map((v) => {
      if (v === null) return []
      else return [...v]
    })
  ).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
  ])
})
