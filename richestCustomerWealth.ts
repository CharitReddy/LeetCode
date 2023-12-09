function maximumWealth(accounts: number[][]): number {
  let totalWealths = accounts.map((customer) =>
    customer.reduce((acc, balance) => acc + balance, 0)
  );
  return Math.max(...totalWealths);
}

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
