/*********Problem- 10***********
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written
 */

const romanToInt = (roman) => {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  const romanArr = roman.split("");
  // console.log(romanArr);
  for (let i = 0; i < romanArr.length; i++) {
    const currentI = romanArr[i];
    const nextI = romanArr[i + 1];

    if (romanObj[currentI] < romanObj[nextI]) {
      sum += romanObj[nextI] - romanObj[currentI];
      i++;
    } else {
      sum += romanObj[currentI];
    }
  }

  return sum;
};
const result10 = romanToInt("iv");
// console.log(result10);
