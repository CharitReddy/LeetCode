function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let maxPossible = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let prev = i === 0 || flowerbed[i - 1] === 0;
    let next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
    if (flowerbed[i] === 0 && prev && next) {
      maxPossible++;
      flowerbed[i] = 1;
    }
  }
  return maxPossible >= n;
}

canPlaceFlowers([1, 0, 0, 0, 1], 1);
// Output: true
canPlaceFlowers([1, 0, 0, 0, 1], 2);
// Output: false
