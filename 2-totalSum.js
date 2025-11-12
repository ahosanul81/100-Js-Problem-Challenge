/*****************Problem-2*****************
 * 
 * Write a function that returns the sum of two numbers.
 * Write a function that returns the sum of all numbers regardless of # of params.

 */

function totalSum(...params) {
  // console.log(params);
  let total = 0;
  params.forEach((elem) => {
    total += elem;
  });
  return total;
}
const result2 = totalSum(1, 2, 3, 4);
// console.log(result2);
