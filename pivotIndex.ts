function pivotIndex(nums: number[]): number {
  let totalSum = nums.reduce((a, b) => a + b);
  let pivotSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (pivotSum == totalSum - pivotSum - nums[i]) {
      return i;
    }
    pivotSum = pivotSum + nums[i];
  }
  return -1;
}

// let nums: number[] = [1, 7, 3, 6, 5, 6];
// pivotIndex(nums);
