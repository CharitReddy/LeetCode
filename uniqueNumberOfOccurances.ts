function uniqueOccurrences(arr: number[]): boolean {
  let occuranceMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (occuranceMap.has(arr[i])) {
      occuranceMap.set(arr[i], occuranceMap.get(arr[i]) + 1);
    } else {
      occuranceMap.set(arr[i], 1);
    }
  }

  let occuranceSet = new Set(occuranceMap.values());

  return occuranceMap.size === occuranceSet.size;
}

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
