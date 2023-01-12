/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function closetsNumber(sum, lastSum, target) {
  if (Math.abs(sum - target) < Math.abs(lastSum - target)) return sum;
  return lastSum;
}

var threeSumClosest = function (nums, target) {
  let first = 0;
  let sum = 0;
  let lastSum = nums[0] + nums[1] + nums[2];
  let end = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (first < nums.length - 1) {
    let start = first + 1;
    while (start < end) {
      sum = nums[first] + nums[start] + nums[end];
      if (target == sum) {
        return sum;
      }
      if (sum > target) {
        end--;
      } else {
        start++;
      }
      lastSum = closetsNumber(sum, lastSum, target);
    }
    first++;
    end = nums.length - 1;
  }
  return lastSum;
};
