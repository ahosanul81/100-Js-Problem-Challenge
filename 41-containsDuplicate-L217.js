/**************problem - 41******************
 * 217. Contains Duplicate
Easy
Topics
premium lock icon
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
 */

// const  containsDuplicate = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count += 1;
//       }
//     }
//   }
//   return count > 0;
// };
const containsDuplicate = function (nums) {
  const arr = new Set([...nums]); // return object
  // const arr2 = [...new Set(nums)]; return array

  return arr.size !== nums.length;
};
const result41 = containsDuplicate([1, 2, 3, 1]);
// console.log(result41);
