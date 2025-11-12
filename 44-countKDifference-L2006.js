/*************problem - 44 *******************
 * 2006. Count Number of Pairs With Absolute Difference K
Easy
Topics
premium lock icon
Companies
Hint
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
 */
var countKDifference = function (nums, k) {
  let pair = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] - nums[j] === k) {
        pair += 1;
      }
    }
  }
  return pair;
};
const result44 = countKDifference((nums = [1, 2, 2, 1]), (k = 1));
// console.log(result44);
