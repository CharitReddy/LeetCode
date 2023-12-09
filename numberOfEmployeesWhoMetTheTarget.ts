function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.reduce(
    (count, employeeHours) => count + Number(employeeHours >= target),
    0
  );
}

numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
