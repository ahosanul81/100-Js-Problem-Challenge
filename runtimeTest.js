function isAlphaNum(c) {
  return (
    (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
  );
}
var isPalindromeString = function (s) {
  let fr = 0;
  let bc = s.length - 1;

  while (fr < bc) {
    while (fr < bc && !isAlphaNum(s[fr])) {
      fr++;
    }
    while (fr < bc && !isAlphaNum(s[bc])) {
      bc--;
    }

    if (s[fr].toLowerCase() !== s[bc].toLowerCase()) {
      return false;
    }
    fr++;
    bc--;
  }

  return true;
};

const result57 = isPalindromeString("A man, a plan, a canal: Panama");
// const result57 = isPalindromeString("abc"); true
console.log(result57);
