/** ************Problem- 1***********************
 *Write a function that returns the sum of two numbers.
 *Write a function that returns the sum of all numbers regardless of # of params.
 *
 */

function arrayReplace(inputArray, elementToReplace, substructionElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substructionElem;
    }
  });
  return inputArray;
}

const result = arrayReplace([1, 2, 1], 1, 3);
