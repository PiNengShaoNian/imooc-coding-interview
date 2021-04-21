import { deckRevealedIncreasing } from '../reveal-cards-in-increasing-order'

test('deckRevealedIncreasing', () => {
  expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toEqual([
    2,
    13,
    3,
    11,
    5,
    17,
    7,
  ])
  expect(deckRevealedIncreasing([1, 2])).toEqual([1, 2])
})
