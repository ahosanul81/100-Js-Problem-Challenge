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
