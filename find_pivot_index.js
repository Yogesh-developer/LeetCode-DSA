/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    rightSum = rightSum - nums[i];
    if (rightSum == leftSum) return i;
    leftSum = leftSum + nums[i];
  }
  return -1;
};
