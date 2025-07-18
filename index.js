/** ************Day- 1***********************
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

/*****************day-2*****************
 * 
 * Write a function that returns the sum of two numbers.
 * Write a function that returns the sum of all numbers regardless of # of params.

 */

function totalSum(...params) {
  // console.log(params);
  let total = 0;
  params.forEach((elem) => {
    total += elem;
  });
  return total;
}
const result2 = totalSum(1, 2, 3, 4);
// console.log(result2);

/*****************day-3*****************
 * 
 *Give a rectangular matrix of characters, add a border of asterisks(*) to it. 


 */

function addBorder(pictures) {
  let wall = "*".repeat(pictures[0].length + 2);
  pictures.unshift(wall);
  pictures.push(wall);
  for (let i = 1; i < pictures.length - 1; i++) {
    // console.log(pictures[i]);

    pictures[i] = "*".concat(pictures[i], "*");
  }
  return pictures;
}
const result3 = addBorder(["abc", "ded"]);
// console.log(result3);

/*****************day-4*****************
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

/********day-5
 *Sum all the prime numbers up to and including the provided number.
* A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

 */

const sumAllPrimeNumber = (num) => {
  let primeTotal = 0;
  for (let i = 2; i < num; i++) {
    // console.log(i);
    for (let j = 2; j < num; j++) {
      // console.log(j);
      if (i === j) {
        primeTotal += i;
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return primeTotal;
};

const result5 = sumAllPrimeNumber(10);
// console.log(result5);

/*********day-7**************
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

const triangleMake = (rows, cols) => {
  let stars = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - i; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
};
const result7 = triangleMake(3, 5);
// console.log(result7);s

/*********day-8**************
 * You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.

Example 1:

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
 */

const minSum = (num) => {
  const arr = num.toString().split("").sort();
  const sum = Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
  return sum;
};
const result8 = minSum(2932);
