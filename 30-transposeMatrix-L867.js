/***********problem - 30 *********
 * 867. Transpose Matrix
Easy
Topics
premium lock icon
Companies
Hint
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 
 */

const transpose = (matrix) => {
  const arr1 = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0)
  );

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      arr1[col][row] = matrix[row][col];
    }
  }

  return arr1;
};
const result30 = transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// console.log(result30);
