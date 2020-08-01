/*

Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3.
If the compressed string would not become smaller than the original string, your method should return the original string


input: string
output: string

examples:
"aabbccddefff" => "a2b2c2d2e1f3"

"abcd" => "abcd" // because a1b1c1d1 is longer than the original string
*/

const compressString = (string) => {
  if (string.length <= 2) {
    return string;
  }

  //initialize a counter
  let count = 1;
  //convert string to an array
  let array = string.split('');
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

  let result = compressed.join('');
  return result.length > string.length ? string : result;
};

console.log(compressString('aabbccddefff')); //a2b2c2d2e1f3
console.log(compressString('aabccccaaa')); //a2b1c4a3
console.log(compressString('cccccccaarr')); //c7a2r2
console.log(compressString('abcdd'));
