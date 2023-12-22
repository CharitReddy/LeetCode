function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  function getRuleKeyIndex(ruleKey: string): number {
    if (ruleKey === "type") return 0;
    else if (ruleKey === "color") return 1;
    else if (ruleKey === "name") return 2;
  }

  const ruleKeyIndex = getRuleKeyIndex(ruleKey);
  let matches = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleKeyIndex] === ruleValue) matches++;
  }
  return matches;
}

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
