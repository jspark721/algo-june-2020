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
  if (arr.length === 0) return -1;
  ß;

  //initialize total sum and left sum
  let totalsum = 0;
  let leftsum = 0;

  //get the total sum of the array using forEach
  arr.forEach((num) => (totalsum += num));

  //to get the equilibrium index, we get the total sum of the array and then subract the
  //leftsum of the array (this gets the right sum of the array) and then we need to subtract
  //the equilibrium element arr[i] and that needs to equal leftsum
  //totalsum - leftsum - arr[i] === leftsum // then we found the equilibrium index

  for (let i = 0; i < arr.length; i++) {
    if (totalsum - leftsum - arr[i] === leftsum) {
      return i;
    }
    //keep adding the leftsum to find the equilibrium index value
    leftsum += arr[i];
    console.log(`i ${i} leftsum ${leftsum}`);
  }
  //come out of the loop and we didn't find equilibrium index so return -1
  return -1;
};

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])); //3
console.log(equilibriumIndex([2, 0, 10, 5, 21, 3, 15, -1]));
console.log(equilibriumIndex([1, 2, 6, 4, 0 - 1]));
