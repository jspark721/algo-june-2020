/* given two sequences print longest common subsequence

LCS for input Sequences "ABCDGH" and "AEDFHR" is "ADH" of length 3
LCS for input Sequences "AGGTAB" and "GXTXAYB" is "GTAB" of length 4

*/

const lcs = (str1, str2) => {
  let m = str1.length;
  let n = str2.length;

  //create an array of m*n matrix
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  //loop through the dp array and check if str1 and str2 characters match
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        //if the characters match, we're going to take the value to the diagonal of the dp table and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        //if it doesn't match, we're going to take the max value between the top or left value of the current location we are at
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp);
  //return the last value in the dp table as that will be the length longest common subsequence
  return dp[m][n];
};

console.log(lcs('AGCAT', 'GAC'));

//time complexity O(n*m)
//space complexity O(n*m)
