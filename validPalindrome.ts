function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (!/[a-zA-Z0-9]/.test(s[start])) {
      start++;
      continue;
    }
    if (!/[a-zA-Z0-9]/.test(s[end])) {
      end--;
      continue;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
    else {
      start++;
      end--;
    }
  }
  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
