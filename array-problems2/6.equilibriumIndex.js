/*

Equilibrium index of an array is an index such that the sum of elements at lower indexes 
is equal to the sum of elements at higher indexes. For example, in an array A:

Example :
Input : A[] = {-7, 1, 5, 2, -4, 3, 0}
Output : 3
3 is an equilibrium index, because:
A[0] + A[1] + A[2]  =  A[4] + A[5] + A[6]
-7 + 1 + 5     =       -4 + 3 + 0    = -1


Another example

Input: [2, 0, 10, 5, 4, 3, 15, -1];
Ouput: 4
a[0] + a[1] + a[2] + a[3]  =  a[5] + a[6] + a[7];

*/

const equilibriumIndex = (arr) => {
  let leftsum = 0;
  let rightsum = 0;
  let half = Math.floor(arr.length / 2);

  for (let i = 0; i < half; i++) {
    leftsum += arr[i];
  }
  for (let j = half; j < arr.length; j++) {
    rightsum += arr[j];
  }
  console.log(`leftsum ${leftsum} rightsum ${rightsum}`);
  let equilibriumValue = rightsum - leftsum;
  console.log("equilibriumvalue: " + equilibriumValue);
  for (let k = 0; k < arr.length; k++) {
    if (equilibriumValue === arr[k]) {
      return k;
    }
  }
  return -1;
};

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])); //3
console.log(equilibriumIndex([2, 0, 10, 5, 21, 3, 15, -1])); //4
console.log(equilibriumIndex([1, 2, 6, 4, 0 - 1])); //2

// time complexity
// first for loop is n/2 and second for loop is n/2 so that's O(n) plus another O(n)
// so time complexity is O(2n);
