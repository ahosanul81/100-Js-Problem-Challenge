/************problem - 57 ********************
 * 125. Valid Palindrome
Easy
Topics
premium lock icon
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 */

const isPalindromeString = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (/^[a-zA-Z0-9]+$/.test(s[i]) !== false) {
      str += s[i];
    }
  }
  return str.split("").reverse().join("").toUpperCase() === str.toUpperCase();
};

const result57 = isPalindromeString("A man, a plan, a canal: Panama");
// const result57 = isPalindromeString("abc"); true
// console.log(result57);
