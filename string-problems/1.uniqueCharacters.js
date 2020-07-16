/* 

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

*/

const uniqueCharacters = (string) => {
  //if string is empty, no characters
  if (string.length === 0) return false;
  //if string has one character, it's automatically unique
  if (string.length === 1) return true;

  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = 0;
    }
    hash[string[i]]++;
  }

  for (let key in hash) {
    if (hash[key] > 1) {
      return false;
    }
  }
  return true;
};

//time complexity O(n)
//space complexity O(n) -- using an extra hash table data structure

console.log(uniqueCharacters("hello")); //false
console.log(uniqueCharacters("abcde")); //true
console.log(uniqueCharacters("unique")); //false
console.log(uniqueCharacters("computer")); //true

//if we can't use additional data structures, then the time complexity will be worse at O(n^2) because we will loop through the string and compare every character with all the other characters using a nested for loop which would increase the time complexity from O(n) to O(n^2)

const uniqueChars = (string) => {
  if (string.length === 0) return false;
  if (string.length === 1) return true;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }
  //no duplicates encountered
  return true;
};

console.log(uniqueChars("hello")); //false
console.log(uniqueChars("terminal")); //true
console.log(uniqueChars("abcdefg"));

//or we can sort the string, which takes O(n log n) and then loop through the string and check if any characters next to eachother is the same, if it is then return false. This also increases the time complexity from O(n) to O(n + n log n)
//actually we can't sort a string, we have to convert it to an array first and then sort it which also takes extra space.
