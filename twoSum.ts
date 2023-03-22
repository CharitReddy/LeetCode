function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map();
  nums.map((num, idx) => numMap.set(num, idx));
  let sumIndices: number[] = [];
  nums.map((num, idx) => {
    const remainingSum = target - num;
    if (numMap.has(remainingSum) && idx != numMap.get(remainingSum))
      sumIndices = [idx, numMap.get(remainingSum)];
  });
  return sumIndices;
}
