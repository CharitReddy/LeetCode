function reverseVowels(s) {
  function isVowel(char) {
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
  console.log(sArray);
  let left = 0;
  let right = sArray.length - 1;
  while (left <= right) {
    if (isVowel(sArray[left]) && isVowel(sArray[right])) {
      let temp = sArray[left];
      sArray[left] = sArray[right];
      sArray[right] = temp;
      left++;
      right--;
    } else if (isVowel(sArray[left]) && !isVowel(sArray[right])) {
      right--;
    } else if (!isVowel(sArray[left]) && isVowel(sArray[right])) {
      left++;
    }
    console.log(sArray);
  }
  return sArray.join("");
}

reverseVowels("hello");
