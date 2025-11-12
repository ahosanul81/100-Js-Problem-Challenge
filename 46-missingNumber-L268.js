/***************problem - 46 ***********************
 * 268. Missing Number
Easy
Topics
premium lock icon
Companies
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 */

const missingNumber = function (nums) {
  const totalSeq = Array.from({ length: nums.length + 1 }, (_, i) => i);

  for (let i = 0; i < totalSeq.length; i++) {
    if (!nums.includes(totalSeq[i])) {
      return totalSeq[i];
    }
  }
};
// another way
// var missingNumber = function(nums) {
//     for(let i = 0;i<=nums.length;i++){
//         if(nums.includes(i)==false){
//             return i;
//         }
//     }
// };

const result46 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
// console.log(result46);
