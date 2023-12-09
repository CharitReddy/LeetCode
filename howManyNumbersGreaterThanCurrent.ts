function smallerNumbersThanCurrent(nums: number[]): number[] {
  let indexedNums = nums.map((num, ind) => ({ num, ind }));
  let numberOfSmallerNumbers = new Array(nums.length).fill(0);
  indexedNums.sort((num1, num2) => num1.num - num2.num);
  let count = 0;
  for (let i = 0; i < indexedNums.length; i++) {
    if (i > 0 && indexedNums[i].num === indexedNums[i - 1].num) {
      numberOfSmallerNumbers[indexedNums[i].ind] = count;
      continue;
    }

    count = i;
    numberOfSmallerNumbers[indexedNums[i].ind] = count;
  }
  return numberOfSmallerNumbers;
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
