function maxProfit(prices: number[]): number {
  let min: number = Infinity;
  let profit: number = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(prices[i] - min, profit);
  }
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
