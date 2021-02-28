import { arrangeWords, arrangeWords1 } from '../rearrange-words-in-a-sentence'

test('能正确地排序', () => {
  expect(arrangeWords('Leetcode is cool')).toEqual('Is cool leetcode')
  expect(arrangeWords('Keep calm and code on')).toEqual('On and keep calm code')
  expect(arrangeWords('To be or not to be')).toEqual('To be or to be not')
  
  expect(arrangeWords1('Leetcode is cool')).toEqual('Is cool leetcode')
  expect(arrangeWords1('Keep calm and code on')).toEqual('On and keep calm code')
  expect(arrangeWords1('To be or not to be')).toEqual('To be or to be not')
})
