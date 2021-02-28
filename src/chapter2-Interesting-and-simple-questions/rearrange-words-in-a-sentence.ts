import { countingSort } from '../util/counting-sort'

//Time Complexity O(Nlog(N)), Space Complexity O(1)
export function arrangeWords(text: string): string {
  const words: string[] = text.split(' ')
  if (words[0]) {
    words[0] = words[0][0].toLowerCase() + words[0].slice(1)
  }

  words.sort((a, b) => a.length - b.length)

  if (words[0]) {
    words[0] = words[0][0].toUpperCase() + words[0].slice(1)
  }

  return words.join(' ')
}

//Time Complexity O(N), Space Complexity O(N)
export function arrangeWords1(text: string): string {
  if (!text) return text
  let minLength = Infinity,
    maxLength = -Infinity
  const words = text.split(' ')

  if (words[0]) {
    words[0] = words[0][0].toLowerCase() + words[0].slice(1)
  }

  for (let i = 0; i < words.length; ++i) {
    if (words[i].length < minLength) minLength = words[i].length

    if (words[i].length > maxLength) maxLength = words[i].length
  }

  const sortedWords: string[] = countingSort(
    minLength,
    maxLength,
    words,
    (s) => s.length
  )

  if (words[0]) {
    sortedWords[0] = sortedWords[0][0].toUpperCase() + sortedWords[0].slice(1)
  }

  return sortedWords.join(' ')
}
