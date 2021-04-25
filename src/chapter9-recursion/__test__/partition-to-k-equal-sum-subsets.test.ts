import { canPartitionKSubsets } from '../partition-to-k-equal-sum-subsets'

test(' canPartitionKSubsets ', () => {
  expect(canPartitionKSubsets([0, 127], 1)).toBeTruthy()
})
