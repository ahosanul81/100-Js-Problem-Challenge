/**************problem - 45*******************
 * 136. Single Number
Easy
Topics
premium lock icon
Companies
Hint
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4
 */
// var singleNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let foundDuplicate = false;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] === nums[j]) {
//         foundDuplicate = true;
//         break;
//       }
//     }
//     if (!foundDuplicate) {
//       return nums[i];
//     }
//   }
//   // return -1;
// };
// another way
const singleNumber = function (nums) {
  let singleOne;
  for (let i = 0; i < nums.length; i++) {
    singleOne = singleOne ^ nums[i];
  }
  return singleOne;
};
const result45 = singleNumber([4, 1, 2, 1, 2]);
// console.log(result45);
