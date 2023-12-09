function leftRightDifference(nums: number[]): number[] {
  const numsLength = nums.length;
  let differences = new Array(numsLength).fill(0);
  let leftSum = 0;
  let leftSums = new Array(numsLength).fill(0);
  let rightSum = 0;
  let rightSums = new Array(numsLength).fill(0);

  for (let i = 0; i < numsLength; i++) {
    leftSum = nums[i - 1] ? leftSum + nums[i - 1] : 0;
    leftSums[i] = leftSum;
  }
  for (let j = numsLength - 1; j >= 0; j--) {
    rightSum = nums[j + 1] ? rightSum + nums[j + 1] : 0;
    rightSums[j] = rightSum;
  }

  for (let diffInd = 0; diffInd < numsLength; diffInd++) {
    differences[diffInd] = Math.abs(leftSums[diffInd] - rightSums[diffInd]);
  }

  return differences;
}

leftRightDifference([10, 4, 8, 3]);
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
