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
