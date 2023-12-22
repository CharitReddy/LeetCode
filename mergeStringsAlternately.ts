function mergeAlternately(word1: string, word2: string): string {
  const maxLength = Math.max(word1.length, word2.length);
  let res = "";
  for (let i = 0; i < maxLength; i++) {
    res = word1[i] ? `${res}${word1?.[i]}` : res;
    res = word2[i] ? `${res}${word2?.[i]}` : res;
  }
  return res;
}
mergeAlternately("abc", "pqr");
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
