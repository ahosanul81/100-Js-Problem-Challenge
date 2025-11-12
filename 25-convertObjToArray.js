/**********problem - 25 ***********
 * // create a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//toArray({a: 1, b: 2}) → [["a", 1], ["b", 2]]
 * 
*/

const convertObjToArray = (obj) => {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  }
  return arr;
};

const result25 = convertObjToArray({ a: 1, b: 2 });
// console.log(result25);
