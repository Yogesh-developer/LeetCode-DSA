/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let numbers = [];
  for (let i = 0; i < numRows; i++) {
    let number = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        number.push(1);
      } else {
        number.push(numbers[i - 1][j - 1] + numbers[i - 1][j]);
      }
    }
    numbers.push(number);
  }
  return numbers;
};
