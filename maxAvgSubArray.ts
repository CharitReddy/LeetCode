function findMaxAverage(nums: number[], k: number): number {
  let initSum = 0;
  for (let i = 0; i < k; i++) {
    initSum += nums[i];
  }
  let maxAvg = initSum / k;
  for (let i = 1; i < nums.length - k + 1; i++) {
    initSum += nums[i + k - 1] - nums[i - 1];
    maxAvg = Math.max(maxAvg, initSum / k);
  }
  return maxAvg;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
