function buildArray(nums: number[]): number[] {
  let permutatedArray = [];
  nums.map((num, i) => {
    permutatedArray.push(nums[num]);
  });
  return permutatedArray;
}

buildArray([0, 2, 1, 5, 3, 4]);
//[0,1,2,4,5,3]
