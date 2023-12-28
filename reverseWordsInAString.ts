function reverseWords(s: string): string {
  return s.match(/(\S+)/g).reverse().join(" ");
}

reverseWords("the sky is blue");
// Output: "blue is sky the"
