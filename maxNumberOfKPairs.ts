function maxOperations(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;
  let numOperations = 0;

  nums.sort((a, b) => a - b);

  while (left < right) {
    const currSum = nums[left] + nums[right];
    if (currSum === k) {
      numOperations++;
      left++;
      right--;
      continue;
    }
    if (currSum > k) right--;
    else if (currSum < k) left++;
  }
  return numOperations;
}

maxOperations([1, 2, 3, 4], 5);
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
