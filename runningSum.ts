function runningSum(nums: number[]): number[] {
  let runSum: number[] = [];
  let currentSum: number = 0;
  for (let i in nums) {
    currentSum = currentSum + nums[i];
    runSum.push(currentSum);
  }
  return runSum;
}

// let nums = [1, 2, 3, 4];
// runningSum(nums);
