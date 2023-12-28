function largestAltitude(gain) {
  let altitudes = new Array(gain.length).fill(0);
  for (let i = 0; i < gain.length; i++) {
    altitudes[i + 1] = altitudes[i] + gain[i];
    console.log(altitudes);
  }
  return 1;
}

largestAltitude([-5, 1, 5, 0, -7]);
