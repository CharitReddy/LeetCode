function findWordsContaining(words: string[], x: string): number[] {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}

findWordsContaining(["leet", "code"], "e");
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
