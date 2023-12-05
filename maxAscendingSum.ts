function maxAscendingSum(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[j - 1] >= nums[j]) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = 0;
      i = j;
    }
    currentSum += nums[j];
  }
  return Math.max(maxSum, currentSum);
}

maxAscendingSum([10, 20, 30, 5, 10, 50]);
//65
