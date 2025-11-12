/*****************Problem-4*****************
 *
 *Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.
 */

function sequence(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    // console.log(inputArray[i], inputArray[i - 1]);

    if (inputArray[i] < inputArray[i - 1]) {
      //2 < 1
      return false;
    }
  }
  return true;
}

const result4 = sequence([1, 2, 2, 4, 3]);
// console.log(result4);
