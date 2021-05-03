import { minStickers } from '../stickers-to-spell-word'

test('minStickers', () => {
  expect(minStickers(['with', 'example', 'science'], 'thehat')).toBe(3)
  expect(minStickers(['notice', 'possible'], 'basicbasic')).toBe(-1)
})
