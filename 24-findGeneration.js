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
