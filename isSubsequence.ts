function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  let subCurrentIndex: number = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subCurrentIndex] === t[i]) subCurrentIndex++;
  }
  return subCurrentIndex === s.length ? true : false;
}

//isSubsequence('ace','abcde'); true
//isSubsequence('axc','ahbgdc'); false
