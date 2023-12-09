function longestPalindrome(s: string): number {
  let stringMap = new Map();
  for (let char of s) {
    if (stringMap.has(char)) stringMap.set(char, stringMap.get(char) + 1);
    if (!stringMap.has(char)) {
      stringMap.set(char, 1);
    }
  }
  let maxLength: number = 0;
  let maxOdd: number = 0;
  for (let [key, value] of stringMap.entries()) {
    if (value % 2 == 0) maxLength = maxLength + value;
    else {
      maxLength = maxLength + value - 1;
      maxOdd = 1;
    }
  }
  return maxLength + maxOdd;
}
