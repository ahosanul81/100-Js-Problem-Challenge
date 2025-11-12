/*************problem- 27**************
 * clone an array
 * arr([1,1]) // [1,1, [1,1]]
 *  */
const cloneArray = (arr) => [...arr, arr];
const result27 = cloneArray([1, 1]);
// console.log(result27);
