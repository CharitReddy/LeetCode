function isAnagram(s: string, t: string): boolean {
  let charMap = new Map();
  let repeatCount = Math.max(s.length, t.length);
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (charMap.has(currChar)) {
      charMap.set(currChar, charMap.get(currChar) + 1);
    } else {
      charMap.set(currChar, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const currChar = t[i];
    if (charMap.has(currChar)) {
      if (charMap.get(currChar) > 0) {
        charMap.set(currChar, charMap.get(currChar) - 1);
        repeatCount--;
      }
    }
  }

  let maxSize = Math.max(s.length, t.length) - Math.min(s.length, t.length);
  if (maxSize > 0) {
    return Math.max(s.length, t.length) - repeatCount === 0;
  }
  return repeatCount === 0;
}

isAnagram("anagram", "nagaram");
// Output: true;
