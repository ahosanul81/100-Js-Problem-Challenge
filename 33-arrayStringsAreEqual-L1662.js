/*********problem - 33 ***************
 * 1662. Check If Two String Arrays are Equivalent
Easy
Topics
premium lock icon
Companies
Hint
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
 */
const arrayStringsAreEqual = (word1, word2) => {
  // const alphabetObj = {
  //   a: 0,
  //   b: 1,
  //   c: 2,
  //   d: 3,
  //   e: 4,
  //   f: 5,
  //   g: 6,
  //   h: 7,
  //   i: 8,
  //   j: 9,
  //   k: 10,
  //   l: 11,
  //   m: 12,
  //   n: 13,
  //   o: 14,
  //   p: 15,
  //   q: 16,
  //   r: 17,
  //   s: 18,
  //   t: 19,
  //   u: 20,
  //   v: 21,
  //   w: 22,
  //   x: 23,
  //   y: 24,
  //   z: 25,
  // };

  const jointWord1 = word1.join("");
  const jointWord2 = word2.join("");
  if (jointWord1 !== jointWord2) {
    return false;
  } else {
    return true;
  }
  // for (let i = 1; i < jointWord1.length; i++) {
  //   if (alphabetObj[jointWord1[i - 1]] > alphabetObj[jointWord1[i]]) {
  //     return (result = false);
  //   }
  // }
  // for (let i = 1; i < jointWord2.length; i++) {
  //   if (alphabetObj[jointWord2[i - 1]] > alphabetObj[jointWord2[i]]) {
  //     return (result = false);
  //   }
  // }

  // return result;
};

const result33 = arrayStringsAreEqual(["jrk", "qci"], ["jrkqci"]);
// console.log(result33);
