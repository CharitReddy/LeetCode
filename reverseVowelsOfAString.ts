function reverseVowels(s: string): string {
  function isVowel(char: string) {
    char = char.toLowerCase();
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  }
  let sArray = s.split("");
  let left = 0;
  let right = sArray.length - 1;
  while (left < right) {
    if (isVowel(sArray[left]) && isVowel(sArray[right])) {
      let temp = sArray[left];
      sArray[left] = sArray[right];
      sArray[right] = temp;
    } else if (isVowel(sArray[left]) && !isVowel(sArray[right])) {
      right--;
      continue;
    } else if (!isVowel(sArray[left]) && isVowel(sArray[right])) {
      left++;
      continue;
    }
    left++;
    right--;
  }
  return sArray.join("");
}

reverseVowels("hello");
// Output: "holle"
