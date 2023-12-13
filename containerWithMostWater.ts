function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let xAxis = 0;
  let currentMaxWater = 0;
  let maxWater = 0;
  while (left < right) {
    xAxis = right - left;
    currentMaxWater = Math.min(height[left], height[right]) * xAxis;
    maxWater = currentMaxWater > maxWater ? currentMaxWater : maxWater;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
