/*************problem - 43 ************* 
 * 1528. Shuffle String
Easy
Topics
premium lock icon
Companies
Hint
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

 

Example 1:


Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

const restoreString = function (s, indices) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    const strPosition = indices[i];
    res[strPosition] = s[i];
  }
  return res.join("");
};

const result43 = restoreString(
  (s = "codeleet"),
  (indices = [4, 5, 6, 7, 0, 2, 1, 3])
);
// console.log(result43);
