/*********problem 26 ************
 * Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2
***
Step (the input) is always a positive integer (or zero).
For an odd step add 3, for an even step subtract 1.
 */

const countStep = (step) => {
  let boxes = 0;
  for (i = 0; i <= step; i++) {
    if (i === 0) continue;
    if (i % 2 === 0) {
      boxes -= 1;
    } else {
      boxes += 3;
    }
  }
  return boxes;
};
const result26 = countStep(3);
// console.log(result26);
