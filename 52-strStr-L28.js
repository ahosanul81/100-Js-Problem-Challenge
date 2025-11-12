/***************problem - 52 *****************
 * 28. Find the Index of the First Occurrence in a String
Easy
Topics
premium lock icon
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
 */
const strStr = function (haystack, needle) {
  let str = "";
  for (let i = 0; i < haystack.length; i++) {
    str += haystack[i];
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

//another way
// var strStr = function(haystack, needle) {
//     const result = haystack.indexOf(needle)
//     return result
// };

// const result52 = strStr((haystack = "sadbutsad"), (needle = "sad"));
const result52 = strStr((haystack = "hello"), (needle = "ll"));
// console.log(result52);
