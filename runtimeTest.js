let climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0); // step 1
  dp[0] = 1; // step 2

  for (let i = 1; i <= n; i++) {
    // step 3
    if (i - 1 >= 0) dp[i] += dp[i - 1];
    if (i - 2 >= 0) dp[i] += dp[i - 2];
    console.log(dp);
  }

  return dp[n]; // step 4
};

const result58 = climbStairs(4);
console.log(result58);
