function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let finalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const binaryRepresentation = i.toString(2);
    const numberOfOnes = (binaryRepresentation.match(/1/g) || []).length;

    if (numberOfOnes === k) {
      finalSum += nums[i];
    }
  }
  return finalSum;
}

sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1);
// Output: 13
// Explanation: The binary representation of the indices are:
// 0 = 0002
// 1 = 0012
// 2 = 0102
// 3 = 0112
// 4 = 1002
// Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
// Hence, the answer is nums[1] + nums[2] + nums[4] = 13.
