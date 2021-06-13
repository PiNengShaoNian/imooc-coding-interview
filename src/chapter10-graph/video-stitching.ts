export const videoStitching = (clips: number[][], time: number): number => {
  clips.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  })

  let num = 0
  let right = 0

  for (
    let left = 0, i = 0;
    i < clips.length && right < time;
    left = right, ++num
  ) {
    for (
      ;
      right < time && i < clips.length && clips[i][0] <= left;
      right = Math.max(right, clips[i++][1])
    );
    if (right === left) {
      return -1
    }
  }

  return right >= time ? num : -1
}
