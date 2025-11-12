/*****************problem - 51************************
 * 35. Search Insert Position
Easy
Topics
premium lock icon
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
 */

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
var searchInsert2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }

  return nums.length;
};
// const searchInsert = function (nums, target) {
//   let arr = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     } else {
//       arr.push(target);
//       break;
//     }
//   }
//   return arr.sort().indexOf(target);
// };
// const result51 = searchInsert((nums = [1, 3, 5, 6]), (target = 2));
//  searchInsert2(([1001], 5));
