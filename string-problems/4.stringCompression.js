/*

Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3.
If the compressed string would not become smaller than the original string, your method should return the original string


input: string
output: string

examples:
"aabbccddefff" => "a2b2c2d2e1f3"

"abcd" => "abcd" // because a1b1c1d1 is longer than the original string
*/

const stringCompression = (string) => {
  //edge case
  //if string length is 2 or less, example, "aa" the result would be a2 and that's not smaller than the original string, so we would just return the string
  if (string.length <= 2) {
    return string;
  }

  //create a hash table to keep count of all the characters in the string and how many times it occured
  let hash = {};
  //initialize an empty string to add all the new compressed string to

  let compressed = "";
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = 0;
    }
    hash[string[i]]++;
  }
  console.log(hash);
  for (let key in hash) {
    compressed += `${key}${hash[key]}`;
  }
  return compressed;
};

console.log(stringCompression("aabbccddefff")); //a2b2c2d2e1f3
console.log(stringCompression("aabccccaaa")); //should return a2b1c4a3 but it returns a5b1c4 because its counting the characters as one, so this solution does not work.

const compressString = (string) => {
  if (string.length <= 2) {
    return string;
  }

  //initialize a counter
  let count = 1;
  //convert string to an array
  let array = string.split("");
  let compressed = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        compressed.push(array[i]);
        compressed.push(count);
        count = 1;
      } else {
        compressed.push(array[i]);
        compressed.push(1);
      }
    }
  }
  return compressed.join("");
};

console.log(compressString("aabbccddefff")); //a2b2c2d2e1f3
console.log(compressString("aabccccaaa")); //a2b1c4a3
console.log(compressString("cccccccaarr")); //c7a2r2
