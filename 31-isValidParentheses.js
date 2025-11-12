/************problem - 31 ****************
 * 20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true
 */

// const isValidParentheses = (s) => {
//   const parenthesesArr = ["()", "{}", "[]"];
//   let validParentheses = false;
//   for (let i = 0; i < s.length - 1; i++) {
//     if (parenthesesArr.includes(s[i] + s[i + 1])) {
//       validParentheses = true;
//     } else {
//       validParentheses = false;
//     }
//   }
//   return validParentheses;
// };
const isValidParentheses = (s) => {
  const parentheses = [];
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      parentheses.push(s[i]);
    } else {
      const last = parentheses.pop();
      if (pair[s[i]] !== last) {
        return false;
      }
    }
  }
  return parentheses.length === 0;
};
const result31 = isValidParentheses("([])");
// console.log(result31);
