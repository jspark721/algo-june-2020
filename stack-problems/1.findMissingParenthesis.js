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
  let parenthesis = '';

  //loop through the string, if the current character is a starting parenthesis, "(", add it to the stack
  //if the current character is a closing parenthesis, ")", pop it off the stack
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    }
    if (str[i] === ')') {
      parenthesis = stack.pop();
      if (!parenthesis) {
        return 'missing opening parenthesis (';
      }
    }
  }

  //if the stack has items in it, then it's missing closing parenthesis
  if (stack.length > 0) {
    return 'missing closing parenthesis )';
  } else {
    return 'no missing parenthesis';
  }
};

console.log(findMissingParenthesis('- 2 * (3 + 5(sasdfasdfasd)')); // missing )
console.log(findMissingParenthesis('34 * 4+(21/3 * 5))')); // missing (
