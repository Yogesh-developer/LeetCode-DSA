/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = m + n - 1;
  m = m - 1;
  n = n - 1;
  while (m >= 0 || n >= 0) {
    let num1 = nums1[m];
    let num2 = nums2[n];
    if (num1 >= num2 || num2 == undefined) {
      nums1[index] = num1;
      m--;
    } else {
      nums1[index] = num2;
      n--;
    }
    index--;
  }
};
