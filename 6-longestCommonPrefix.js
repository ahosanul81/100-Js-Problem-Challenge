/************problem - 6****************
 * 14. Longest Common Prefix
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */
const longestCommonPrefix = function (strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return res;
      }
    }

    res += char;
  }

  return res;
};
const result6 = longestCommonPrefix(["flower", "flow", "flight"]);
// console.log(result6);

const triangleMake = (rows, cols) => {
  let stars = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - i; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
};
const result7 = triangleMake(3, 5);
// console.log(result7);s
