function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1); // Initialize output array with 1s

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct; // Multiply with left product
    leftProduct *= nums[i]; // Update left product for the next iteration
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct; // Multiply with right product
    rightProduct *= nums[i]; // Update right product for the next iteration
  }

  return result;
}

productExceptSelf([1, 2, 3, 4]);
// Output: [24,12,8,6]
