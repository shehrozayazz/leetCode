/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const numsCopy = nums.map((num) => num);
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = (i + k) % nums.length;
    nums[nextIndex] = numsCopy[i];
  }
};