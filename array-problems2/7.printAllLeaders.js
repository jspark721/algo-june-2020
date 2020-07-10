/*

Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

For example int the array {16, 17, 4, 3, 5, 2}, 
leaders are 17, 5 and 2.

17 is a leader because it's greater than 4, 3, 5, 2
5 is a leader because it's greater than 2
2 is a leader because its the rightmost element and it's always a leader


we can iterate through the array, using nested for loops and check if all the elements to its right is less than the current array, if it is, print the element
*/

const printAllLeaders = (arr) => {
  if (arr.length === 0) return -1;

  let leaders = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`i ${arr[i]} j ${arr[j]}`);
      if (arr[i] <= arr[j]) {
        break;
      }
      if (j == arr.length - 1) {
        leaders.push(arr[i]);
      }
    }
  }
  //we have to always add the rightmost element
  leaders.push(arr[arr.length - 1]);
  return leaders;
};

/* console.log(printAllLeaders([16, 17, 4, 3, 5, 2]));
 */

//this is O(n^2) because we are using a nested loop

// we can do better, we can keep track of the right max num and check if the values on the left are greater than the right max num

const printLeaders = (arr) => {
  if (arr.length === 0) return -1;

  let rightMaxNum = arr[arr.length - 1];
  let leaders = [rightMaxNum];

  //start the for loop from the right side
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > rightMaxNum) {
      rightMaxNum = arr[i];
      leaders.unshift(rightMaxNum);
    }
  }
  return leaders;
};

console.log(printLeaders([16, 17, 4, 3, 5, 2]));

//time complexity: O(n) as we are looping through the array only once
//space complexity: O(n) taking a new leaders array
