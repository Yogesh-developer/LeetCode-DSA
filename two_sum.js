/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let first = 0;
  let numbers = [];
  let last = nums.length - 1;
  while (first < last) {
    let sum = nums[first] + nums[last];
    if (sum == target) {
      numbers.push(first);
      numbers.push(last);
    }
    last--;
    if (first == last && first < nums.length) {
      first++;
      last = nums.length - 1;
    }
  }
  return numbers;
};
