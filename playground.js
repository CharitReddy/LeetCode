function numIdenticalPairs(nums) {
  console.log(Math.max(...nums));
  let goodPairs = 0;
  let res = new Array(Math.max(...nums) + 1).fill(0);
  console.log(res);
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      goodPairs += res[nums[i]];
    }
    res[nums[i]]++;
  }
  return goodPairs;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
//4
