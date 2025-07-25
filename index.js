// gap - 6, 12, 28
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

/*****************Problem-2*****************
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

/*****************Problem-3*****************
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

/********Problem-5
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

/*********Problem-8**************
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

/***Problem - 9********
 * Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */

const isPalindrome = (x) => {
  const result = x.toString().split("").reverse().join("");
  if (Number(result) === x) {
    return true;
  } else {
    return false;
  }
};
const result9 = isPalindrome(-121);
// console.log(result9);

/*** another way  */

const isPalindrome2 = (x) => {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return rev == x || x == Math.floor(rev / 10);
};
// console.log(isPalindrome2(121));

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

/*********problem- 11************
 * Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
 */

const buildArray = (nums) => {
  const ans = [];

  for (i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

const result11 = buildArray([0, 2, 1, 5, 3, 4]);
// console.log(result11);

/************Problem- 13**********
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
 */

const maximumWealth = (accounts) => {
  let richest = 0;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (sum > richest) {
      richest = sum;
    }
  }
  return richest;
};

const result13 = maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
// console.log(result13);

/************Problem- 14**********
 * 1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

const runningSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};

const result14 = runningSum([1, 2, 3, 4]);
// console.log(result14);

/************Problem- 15**********
 * 1365. How Many Numbers Are Smaller Than the Current Number
Easy
Topics
premium lock icon
Companies
Hint
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 * 
 * 
 */

const smallerNumbersThanCurrent = (nums) => {
  let ansArr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) {
        count += 1;
      }
    }
    ansArr[i] = count;
    count = 0;
  }

  return ansArr;
};
const result15 = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
// console.log(result15);

/***********problem- 16************
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
 */

const defangIPaddr = (address) => {
  const splittedAddress = address.split("");

  let defangAddress = "";
  for (let i = 0; i < splittedAddress.length; i++) {
    if (splittedAddress[i] === ".") {
      splittedAddress[i] = "[.]";
    }
  }

  return splittedAddress.join("");
};
const result16 = defangIPaddr("1.1.1.1");
// console.log(result16);

/*******problem - 17 *************
 *
 *Create a function that takes two numbers as arguments and returns their sum.
 *addition(3, 2) - 5
 *Bitwise Operations
 *bitwiseAND(6, 23) 00000110 -> bitwiseAND (6, 23) -6
 *bitwiseOR(6, 23) 00010111 -> bitwiseOR (6, 23) 23
 *bitwiseXOR (6, 23)00010001 -> bitwiseXOR(6, 23) - 17
 */

const bitWiseAnd = (num1, num2) => num1 & num2;
const bitWiseOr = (num1, num2) => num1 | num2;
const bitWiseXor = (num1, num2) => num1 ^ num2;

// console.log(bitWiseAnd(6, 23));
// console.log(bitWiseOr(6, 23));
// console.log(bitWiseXor(6, 23));

/********problem - 18***************
 * //Add up the Numbers from a Single Number
/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10 
 */

const addNumbersUpto = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
const result18 = addNumbersUpto(4);
// console.log(result18);

/**********problem - 19 *************
 * left shift by power of two
 * shiftToLeft(5,2) // 20
 */

const shiftToLeft = (n1, n2) => n1 << n2;
// console.log(shiftToLeft(5, 2));

/**********problem - 20 ************
 * find the smallest and biggest number
 * [1,2,3,4,5] // output : [1,5]
 */

const findMinMax = (nums) => {
  let minMaxArr = [nums[0], nums[1]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minMaxArr[0]) {
      minMaxArr[0] = nums[i];
    }
    if (nums[i] > minMaxArr[1]) {
      minMaxArr[1] = nums[i];
    }
  }
  return minMaxArr;
};

const findMinMaxWay2 = (nums) => {
  if (!Array.isArray(nums) || nums.length === 0) {
    return null; // handle empty array
  }

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return [min, max];
};
// const result20 = findMinMax([1, 2, 3, 4, 5]);
const result20 = findMinMax([5, 1, 3, 4]);
const result20Way2 = findMinMaxWay2([5, 1, 3, 4]);
// console.log(result20Way2);
// console.log(result20);

/**********problem - 21 ************
 * 5 decemal to binary // 101
 * 5 decimal to octal // 12
 */

const numberSystemConvert = (number) => console.log(number.toString(2));

// numberSystemConvert(5);

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

/**********problem - 23 ************
 * take two input in a fn
 * a+ b = 10 or a = 10 or b = 10
 */

const checkNumber = (a, b) => {
  if (a + b === 10 || a === 10 || b === 10) {
    return true;
  } else {
    return false;
  }
};

// another way
const checkNumberAnotherWay = (a, b) => [a, b, a + b].includes(10);
// console.log(checkNumberAnotherWay(5, 12));

const result23 = checkNumber(5, 10);
// console.log(result23);

/**********problem - 24 ************
 *Create a function that takes a number x and a character y (“m” for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
If the number 15 negative, return the related ancestor. If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "mel".
Examples
generation(2, "f") - "granddaughter"
generation(-3, "m") "great grandfather"
generation(1, "f")
-
"daughter"
Notes
Generation
Male
Female
-3 great grandfather great grandmother
-2 grandfather grandmother
-1 father mother
 */

const findGeneration = (x, y) => {
  const genObj = {
    "-3": { m: "great-grandfather", f: "great-grandmother" },
    "-2": { m: "grand-father", f: "grand-mother" },
    "-1": { m: "father", f: "mother" },
    0: { m: "me", f: "me" },
    1: { m: "son", f: "daughter" },
    2: { m: "grand-son", f: "garnd-daughter" },
    3: { m: "great-grand-son", f: "great-garnd-daughter" },
  };

  return genObj[x][y];
};
// another way

const findGenerationAnotherWay = (x, y) => {
  const genArray = [
    { "-3": { m: "great-grandfather", f: "great-grandmother" } },
    { "-2": { m: "grand-father", f: "grand-mother" } },
    { "-1": { m: "father", f: "mother" } },
    { 0: { m: "me", f: "me" } },
    { 1: { m: "son", f: "daughter" } },
    { 2: { m: "grand-son", f: "garnd-daughter" } },
    { 3: { m: "great-grand-son", f: "great-garnd-daughter" } },
  ];

  const result = genArray.find((genObj) => genObj[x] !== undefined);
  return result[x][y];
};
// console.log(findGenerationAnotherWay(3, "f"));

const result24 = findGeneration(3, "f");
// console.log(result24);

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

/*********problem 26 ************
 * Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2
***
Step (the input) is always a positive integer (or zero).
For an odd step add 3, for an even step subtract 1.
 */

const countStep = (step) => {
  let boxes = 0;
  for (i = 0; i <= step; i++) {
    if (i === 0) continue;
    if (i % 2 === 0) {
      boxes -= 1;
    } else {
      boxes += 3;
    }
  }
  return boxes;
};
const result26 = countStep(3);
// console.log(result26);

/*************problem- 27**************
 * clone an array
 * arr([1,1]) // [1,1, [1,1]]
 *  */
const cloneArray = (arr) => [...arr, arr];
const result27 = cloneArray([1, 1]);
// console.log(result27);

/************problem - 28 ******************
 *
 */

/************problem - 29 ******************
 * 1678. Goal Parser Interpretation
Easy
Topics
premium lock icon
Companies
Hint
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
 */

const interpret = (command) => {
  let goal = [];
  const splittedCommand = command.split("");

  for (let i = 0; i < splittedCommand.length; i++) {
    if (splittedCommand[i] === "G") {
      goal[i] = "G";
    }
    if (splittedCommand[i] === "(" && splittedCommand[i + 1] === ")") {
      goal[i] = "o";
    }
    if (
      splittedCommand[i] === "(" &&
      splittedCommand[i + 1] === "a" &&
      splittedCommand[i + 2] === "l" &&
      splittedCommand[i + 3] === ")"
    ) {
      goal[i] = "al";
    }
  }
  return goal.join("");
};
const result29 = interpret("(al)G(al)()()G");
// console.log(result29);

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
