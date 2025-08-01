// gap -   28, 34
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

/************problem - 6****************
 * 14. Longest Common Prefix
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */
const longestCommonPrefix = function (strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return res;
      }
    }

    res += char;
  }

  return res;
};
const result6 = longestCommonPrefix(["flower", "flow", "flight"]);
// console.log(result6);

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

/***********problem - 12*****************
 * 1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
const twoSum = function (nums, target) {
  const targetvalue = target;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const result12 = twoSum([2, 7, 11, 15], 9);
// console.log(result12);

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

const numberSystemConvert = (number) => number.toString(2);

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

/************problem - 31 ****************
 * 20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true
 */

// const isValidParentheses = (s) => {
//   const parenthesesArr = ["()", "{}", "[]"];
//   let validParentheses = false;
//   for (let i = 0; i < s.length - 1; i++) {
//     if (parenthesesArr.includes(s[i] + s[i + 1])) {
//       validParentheses = true;
//     } else {
//       validParentheses = false;
//     }
//   }
//   return validParentheses;
// };
const isValidParentheses = (s) => {
  const parentheses = [];
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      parentheses.push(s[i]);
    } else {
      const last = parentheses.pop();
      if (pair[s[i]] !== last) {
        return false;
      }
    }
  }
  return parentheses.length === 0;
};
const result31 = isValidParentheses("([])");
// console.log(result31);

/******************problem - 32 ****************
 * 2011. Final Value of Variable After Performing Operations
Easy
Topics
premium lock icon
Companies
Hint
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
 */

const finalValueAfterOperations = (operations) => {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    const valueLowerCase = operations[i].toLowerCase();
    if (valueLowerCase === "--x" || valueLowerCase === "x--") {
      x -= 1;
    }

    if (valueLowerCase === "x++" || valueLowerCase === "++x") {
      x += 1;
    }
  }
  return x;
};
const result32 = finalValueAfterOperations(["--X", "X++", "X++"]);
// console.log(result32);

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

/**************problem - 34 *****************
 *
 */
/**************problem - 35 *****************
 *2114. Maximum Number of Words Found in Sentences
Easy
Topics
premium lock icon
Companies
Hint
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

 

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
 */

const mostWordsFound = (sentences) => {
  let maximumNumberOfWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sentenceLength = sentences[i].split(" ").length;

    if (sentenceLength > maximumNumberOfWords) {
      maximumNumberOfWords = sentenceLength;
    }
  }
  return maximumNumberOfWords;
};

const result35 = mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
// console.log(result35);

/*************problem - 36 *****************
 * 1389. Create Target Array in the Given Order
Easy
Topics
premium lock icon
Companies
Hint
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

 

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
 */

const createTargetArray = function (nums, index) {
  const targetArr = [];
  for (let i = 0; i < nums.length; i++) {
    targetArr.splice(index[i], 0, nums[i]);
  }
  return targetArr;
};

const result36 = createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
// console.log(result36);

/************problem - 37 *****************
 * 509. Fibonacci Number
Easy
Topics
premium lock icon
Companies
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 */
const fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};
const result37 = fib(10);
// console.log(result37);

/***********problem - 38 ****************
 * 1221. Split a String in Balanced Strings
Easy
Topics
premium lock icon
Companies
Hint
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 */

const balancedStringSplit = function (s) {
  let countL = 0;
  let countR = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") countL += 1;
    else if (s[i] === "R") countR += 1;
    if (countL === countR) result += 1;
  }
  return result;
};
const result38 = balancedStringSplit("RLRRLLRLRL");
// console.log(result38);

/*************problem - 39 *****************
 * 1313. Decompress Run-Length Encoded List
Easy
Topics
premium lock icon
Companies
Hint
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.



Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
 */

const decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    for (let j = 1; j <= freq; j++) {
      result.push(val);
    }
  }
  return result;
};
// another way
// var decompressRLElist = function(nums) {
//   let result=[]
//   for(let i=0;i<nums.length;i=i+2){
//     freq=nums[i]
//     val=nums[i+1]
//     result.push(...Array(freq).fill(val))
//   }
//   return result;
// };
const result39 = decompressRLElist([1, 1, 3, 3]);

// console.log(result39);

/**************problem - 40 ********************
 * 771. Jewels and Stones
Easy
Topics
premium lock icon
Companies
Hint
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
 */

const numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count += 1;
      }
    }
  }
  return count;
};

const result40 = numJewelsInStones((jewels = "aA"), (stones = "aAAbbbb"));
// console.log(result40);

/**************problem - 41******************
 * 217. Contains Duplicate
Easy
Topics
premium lock icon
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
 */

// const  containsDuplicate = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count += 1;
//       }
//     }
//   }
//   return count > 0;
// };
const containsDuplicate = function (nums) {
  const arr = new Set([...nums]); // return object
  // const arr2 = [...new Set(nums)]; return array

  return arr.size !== nums.length;
};
const result41 = containsDuplicate([1, 2, 3, 1]);
// console.log(result41);

/*****************problme - 42 ********************
 * 1688. Count of Matches in Tournament
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

 

Example 1:

Input: n = 7
Output: 6
Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.
 */

const numberOfMatches = function (n) {
  let matches = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      matches += n / 2;
      n = n / 2;
    } else if (n % 2 !== 0) {
      matches += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  return matches;
};

const result42 = numberOfMatches(7);
console.log(result42);
