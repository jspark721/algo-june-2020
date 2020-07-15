/*

Find missing parenthesis in a given expression 
- 2 * (3 + 5(sasdfasdfasd) 

//in this case, we are missing the last ) at the end

questions:

are we returning just which parenthesis is missing? in the above example, we would just return ) ?

*/

const findMissingParenthesis = (str) => {
  if (str.length === 0) return -1;

  //create a stack
  let stack = [];

  //loop through the string, if the current character is a starting parenthesis, "(", add it to the stack
  //if the current character is a closing parenthesis, ")", pop it off the stack
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    }
    if (str[i] === ")") {
      stack.pop();
    }
  }

  console.log(stack);
  //loop through the stack, and check which is missing
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "(") {
      return "missing closing parenthesis )";
    }
    if (stack[i] === ")") {
      return "missing opening parenthesis (";
    }
  }
  return "no parenthesis missing";
};

console.log(findMissingParenthesis("- 2 * (3 + 5(sasdfasdfasd)")); // missing )
console.log(findMissingParenthesis("34 * 4+(21/3 * 5))")); // missing (
