/*********Problem-7**************
 * rectangle pattern making
 */

const rows = 4;
const cols = 4;

let stars = "";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    stars += "*";
  }
  stars += "\n";
}
// console.log(stars);
