function largestAltitude(gain: number[]): number {
  let altitudes = new Array(gain.length).fill(0);
  let maxAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitudes[i + 1] = altitudes[i] + gain[i];
    maxAltitude = Math.max(maxAltitude, altitudes[i + 1]);
  }
  return maxAltitude;
}

largestAltitude([-5, 1, 5, 0, -7]);
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
