function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  let res = new Array(k).fill(0);
  let workLogMap = new Map();
  logs.map((log, i) => {
    if (workLogMap.has(log[0])) {
      workLogMap.get(log[0]).add(log[1]);
    } else {
      const minuteSet = new Set();
      minuteSet.add(log[1]);
      workLogMap.set(log[0], minuteSet);
    }
  });
  for (const [user, minutes] of workLogMap.entries()) {
    res[minutes.size - 1]++;
  }

  return res;
}

findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  5
);
//[0,2,0,0,0]
