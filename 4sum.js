/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let first = 0;
  let numbers = [];
  nums.sort((a, b) => a - b);
  while (first < nums.length - 3) {
    let second = first + 1;
    while (second < nums.length - 2) {
      let start = second + 1;
      let end = nums.length - 1;
      while (start < end) {
        let sum = nums[first] + nums[second] + nums[start] + nums[end];
        if (sum == target) {
          numbers.push([nums[first], nums[second], nums[start], nums[end]]);
          while (nums[start] == nums[start + 1]) start++;
          while (nums[end] == nums[end - 1]) end--;
          start++;
          end--;
        } else if (sum > target) {
          end--;
        } else {
          start++;
        }
      }
      while (nums[second] == nums[second + 1]) second++;
      second++;
    }
    while (nums[first] == nums[first + 1]) first++;
    first++;
  }
  return numbers;
};
