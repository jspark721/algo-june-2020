/*
given two strings, write a method to decide if one is a permutation of the other

input: two strings 
output: boolean

examples:
'hello' 'olelh'  --> true
'car' 'arc' --> true
'food' 'good' --> false


*/

const permutationOfStrings = (str1, str2) => {
  //the edge cases
  //if the strings length doesn't equal eachother, we know that it's not a permutation
  if (str1.length !== str2.length) return false;
  //if one of the string is empty, return false
  if (str1.length === 0 || str2.length === 0) return false;

  let hash = {};
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = 0;
    }
    hash[str1[i]]++;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!hash[str2[j]]) {
      return false;
    }
    hash[str2[j]]--;
  }

  return true;
};

console.log(permutationOfStrings("hello", "olelh")); //true
console.log(permutationOfStrings("goodfood", "foodgoof")); //false
console.log(permutationOfStrings("macbook", "bookmark")); //false
console.log(permutationOfStrings("", "hey")); //false
console.log(permutationOfStrings("12abc3", "a123bc")); //true
