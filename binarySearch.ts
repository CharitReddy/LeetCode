function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

search([-1, 0, 3, 5, 9, 12], 9);
// Output: 4
// Explanation: 9 exists in nums and its index is 4
