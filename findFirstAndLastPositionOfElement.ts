function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1,
    startIndex = -1,
    endIndex = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      (startIndex = mid), (endIndex = mid);
      while (startIndex > 0 && nums[startIndex - 1] === target) {
        startIndex--;
      }
      while (endIndex < nums.length - 1 && nums[endIndex + 1] === target) {
        endIndex++;
      }
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [startIndex, endIndex];
}

searchRange([5, 7, 7, 8, 8, 10], 8);
// Output: [3, 4];
