function findDifference(nums1: number[], nums2: number[]): number[][] {
  const diff1 = nums1.filter((num) => !nums2.includes(num));
  const diff2 = nums2.filter((num) => !nums1.includes(num));
  return [[...new Set(diff1)], [...new Set(diff2)]];
}

findDifference([1, 2, 3], [2, 4, 6]);
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
