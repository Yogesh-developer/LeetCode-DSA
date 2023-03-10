/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length - 1;
  let index;
  let secIndex;

  for (index = len - 1; index >= 0; index--) {
    if (nums[index] < nums[index + 1]) {
      break;
    }
  }

  if (index < 0) {
    nums.reverse();
  } else {
    for (secIndex = len; secIndex > index; secIndex--) {
      if (nums[secIndex] > nums[index]) {
        break;
      }
    }

    [nums[index], nums[secIndex]] = [nums[secIndex], nums[index]];

    let low = index + 1;
    let high = len;
    while (low < high) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high--;
    }
  }

  return nums;
};
