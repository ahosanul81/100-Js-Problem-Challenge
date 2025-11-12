/************problem - 28 ******************
 * 58. Length of Last Word
Easy
Topics
premium lock icon
Companies
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */

const lengthOfLastWord = function (s) {
  const removeInitialAndEndingSpace = s.trim();
  const strArr = removeInitialAndEndingSpace.split(" ");

  return strArr[strArr.length - 1].length;
};
const result28 = lengthOfLastWord("   fly me   to   the moon  ");
// console.log(result28);
