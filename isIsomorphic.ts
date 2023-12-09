function isIsomorphic(s: string, t: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
  }
  return true;
}

//isIsomorphic("egg","add"); true
//isIsomorphic("foo","bar"); false
