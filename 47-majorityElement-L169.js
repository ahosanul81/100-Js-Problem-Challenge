/**************problem - 47 ******************
 * 169. Majority Element
Easy
Topics
premium lock icon
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
 */
const majorityElement = function (nums) {
  let maximum = -Infinity;
  let maxKey = null;
  let multipleTimeNum = {};
  for (let i = 0; i < nums.length; i++) {
    if (multipleTimeNum[nums[i]]) continue;
    for (let j = 0; j < nums.length; j++) {
      if (nums.length > 1 && i === j) continue;
      if (nums[i] === nums[j] && !multipleTimeNum[nums[i]]) {
        multipleTimeNum[nums[i]] = 1;
      }
      if (nums[i] === nums[j] && multipleTimeNum[nums[i]]) {
        multipleTimeNum[nums[i]] += 1;
      }
    }
  }
  for (let key in multipleTimeNum) {
    if (multipleTimeNum[key] > maximum) {
      maximum = multipleTimeNum[key];
      maxKey = key;
    }
  }
  return Number(maxKey);
};

const result47 = majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]);
// const result47 = majorityElement([1]);
// const result47 = majorityElement([2, 2, 2, 2]);
// console.log(result47);
