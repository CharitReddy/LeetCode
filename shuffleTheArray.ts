function shuffle(nums: number[], n: number): number[] {
  const numsLen = nums.length;
  let res = new Array(numsLen);
  let counter = 0;
  for (let i = 0; i < n; i++) {
    res[i + counter] = nums[i];
    res[i + counter + 1] = nums[i + n];
    counter++;
  }
  return res;
}

shuffle([2, 5, 1, 3, 4, 7], 3);
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
