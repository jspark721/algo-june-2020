/*Print the elements of an array in the decreasing frequency if 2 numbers have same frequency then print the one which came first.

examples:

input: [2,5,2,8,5,6,8,8]
ouput: [8,8,8,2,2,5,5,6]

input: [2,5,2,6,-1,9999999,5,8,8,8]
output: [8,8,8,2,2,5,5,6,-1,9999999]


use a hash table, keep track of how many occurences each element occurs, and then print that out to the new array in decreasing frequency 

for example, for input [2,5,2,8,5,6,8,8]
create hash table {
  2: 2,
  5: 2,
  8: 3,
  6: 1,
}

then print out, starting from max key value, and decrement the value
*/

const decreasingFrequency = (arr) => {
  let result = [];
  let hash = {};

  if (arr.length === 0) return result;

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 0;
    }
    hash[arr[i]]++;
  }

  //get the keys of the hash table
  let keys = Object.keys(hash);

  //sort the keys by decreasing frequency
  //then while the value of each key is more than 0, we'll add the num value to the results array, make sure to change the key from a '' to a number
  keys
    .sort(function (a, b) {
      return hash[b] - hash[a];
    })
    .forEach(function (num) {
      while (hash[num] > 0) {
        result.push(Number(num));
        hash[num]--;
      }
    });

  return result;
};

console.log(decreasingFrequency([2, 5, 2, 8, 5, 6, 8, 8]));
console.log(decreasingFrequency([2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]));
