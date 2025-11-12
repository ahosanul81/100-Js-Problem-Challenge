/**********problem - 22 ************
 * create a function to return the amount of potatoes there are in a string.
 */

const findRepeatStr = (str) => {
  const splittedStr = str.split("potato");
  const result = splittedStr.length - 1;
  return result;
};
const result22 = findRepeatStr("potatoespotato");
// console.log(result22);
