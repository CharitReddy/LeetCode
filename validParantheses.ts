function isValid(s: string): boolean {
  let closingParanthesesStack = [];
  let charMap = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < s.length; i++) {
    if (closingParanthesesStack.length < 1) closingParanthesesStack.push(s[i]);
    else if (
      closingParanthesesStack[closingParanthesesStack.length - 1] !==
      charMap[s[i]]
    ) {
      closingParanthesesStack.push(s[i]);
    } else closingParanthesesStack.pop();
  }
  return closingParanthesesStack.length === 0;
}

isValid("()[]{}");
// Output: true
