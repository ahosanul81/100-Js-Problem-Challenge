/****************problem - 53 *****************
 * 66. Plus One
Easy
Topics
premium lock icon
Companies
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 */

const plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
    if (carry === 0) break;
  }
  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
};

// another way
const plusOneAnotherWay = function (digits) {
  // console.log(BigInt(1234) + 2n);

  let num = BigInt(digits.join("")) + 1n;
  return num.toString().split("").map(Number);
};

// const result53 = plusOne((digits = [1, 2, 3]));
// const result53 = plusOne([
//   6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
// ]);
const result53 = plusOneAnotherWay([
  6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
]);
// console.log(result53);
