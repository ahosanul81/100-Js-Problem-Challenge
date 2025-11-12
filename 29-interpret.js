/************problem - 29 ******************
 * 1678. Goal Parser Interpretation
Easy
Topics
premium lock icon
Companies
Hint
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
 */

const interpret = (command) => {
  let goal = [];
  const splittedCommand = command.split("");

  for (let i = 0; i < splittedCommand.length; i++) {
    if (splittedCommand[i] === "G") {
      goal[i] = "G";
    }
    if (splittedCommand[i] === "(" && splittedCommand[i + 1] === ")") {
      goal[i] = "o";
    }
    if (
      splittedCommand[i] === "(" &&
      splittedCommand[i + 1] === "a" &&
      splittedCommand[i + 2] === "l" &&
      splittedCommand[i + 3] === ")"
    ) {
      goal[i] = "al";
    }
  }
  return goal.join("");
};
const result29 = interpret("(al)G(al)()()G");
// console.log(result29);
