/***Problem - 9********
 * Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */

const isPalindromeNumber = (x) => {
  const result = x.toString().split("").reverse().join("");
  if (Number(result) === x) {
    return true;
  } else {
    return false;
  }
};
const result9 = isPalindromeNumber(-121);
// console.log(result9);

/*** another way  */

const isPalindrome2 = (x) => {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return rev == x || x == Math.floor(rev / 10);
};
// console.log(isPalindrome2(121));
