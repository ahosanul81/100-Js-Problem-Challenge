/******************problem - 32 ****************
 * 2011. Final Value of Variable After Performing Operations
Easy
Topics
premium lock icon
Companies
Hint
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
 */

const finalValueAfterOperations = (operations) => {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    const valueLowerCase = operations[i].toLowerCase();
    if (valueLowerCase === "--x" || valueLowerCase === "x--") {
      x -= 1;
    }

    if (valueLowerCase === "x++" || valueLowerCase === "++x") {
      x += 1;
    }
  }
  return x;
};
const result32 = finalValueAfterOperations(["--X", "X++", "X++"]);
// console.log(result32);
