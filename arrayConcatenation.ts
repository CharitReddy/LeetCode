function getConcatenation(nums: number[]): number[] {
  const length = nums.length;
  let concatenatedArray = new Array(length * 2);
  for (let i = 0; i < length; i++) {
    concatenatedArray[i] = nums[i];
    concatenatedArray[i + length] = nums[i];
  }
  return concatenatedArray;
}

getConcatenation([1, 3, 2, 1]);
//[1,3,2,1,1,3,2,1]
