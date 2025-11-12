/**********problem - 23 ************
 * take two input in a fn
 * a+ b = 10 or a = 10 or b = 10
 */

const checkNumber = (a, b) => {
  if (a + b === 10 || a === 10 || b === 10) {
    return true;
  } else {
    return false;
  }
};

// another way
const checkNumberAnotherWay = (a, b) => [a, b, a + b].includes(10);
// console.log(checkNumberAnotherWay(5, 12));

const result23 = checkNumber(5, 10);
// console.log(result23);
