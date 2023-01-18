/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  let number = [];
  intervals.sort((a, b) => a[0] - b[0]);
  number[0] = intervals[0];
  let j = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (number[j][1] >= intervals[i][0]) {
      number[j] = [number[j][0], Math.max(number[j][1], intervals[i][1])];
    } else {
      number.push([intervals[i][0], intervals[i][1]]);
      j++;
    }
  }
  return number;
};
