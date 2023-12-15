function isAnagram(s, t) {
  let charMap = new Map();
  let repeatCount = s.length;
  for (let i = 0; i < s.length; i++) {
    console.log(charMap);
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
  return repeatCount === 0;
}

console.log(isAnagram("rat", "car"));
