/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  let product2 = 1;
  let j = nums.length - 1;
  let number = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    number[i] = number[i] * product;
    product = product * nums[i];
    number[j] = number[j] * product2;
    product2 = product2 * nums[j];
    j--;
  }
  return number;
};
