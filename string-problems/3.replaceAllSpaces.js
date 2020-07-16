/*
Write a method to replace all spaces in a string with '%20'

loop through the string, if we see a "_", replace it with %20
we can't permutate a string, strings are immutable, so we need to create a copy of the string
to an array, and then join the array together
*/

const replaceSpaces = (string) => {
  if (string.length === 0) return string;

  let newArray = string.split("");
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === " ") {
      newArray[i] = "%20";
    }
  }
  return newArray.join("");
};

console.log(replaceSpaces("hello world")); //hello%20world
console.log(replaceSpaces("happy summer days"));

//time complexity O(n)
//space complexity O(n) creating a new array
