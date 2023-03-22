function searchInsert(nums: number[], target: number): number {
  let leftPtr = 0;
  let rightPtr = nums.length - 1;
  let mid;
  while (leftPtr <= rightPtr) {
    mid = Math.floor((leftPtr + rightPtr) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      leftPtr = mid + 1;
    } else {
      rightPtr = mid - 1;
    }
  }
  return leftPtr;
}
