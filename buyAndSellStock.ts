function maxProfit(prices: number[]): number {
  let max: number = -Infinity;
  let profit: number = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    profit = Math.max(profit, max - prices[i]);
  }
  return profit;
}
