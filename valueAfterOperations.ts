function finalValueAfterOperations(operations: string[]): number {
  let res = 0;
  for (let i = 0; i < operations.length; i++) {
    operations[i][1] === "-" ? res-- : res++;
  }
  return res;
}

finalValueAfterOperations(["--X", "X++", "X++"]);
//1
