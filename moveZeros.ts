/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
}

moveZeroes([0, 1, 0, 3, 12]);
// Output: [1,3,12,0,0]
