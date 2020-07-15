/*
Evaluate an expression given only single digits and only 2 operators * and +


example:

3 7 8 * +
given this expression
stack [3,7,8]
8 * 7 = 56 + 3 = 59
output result would be 59


4 8 3 + * 
stack [4,8,3] -- stack is last in first out 
3 + 8 = 11 * 4 = 44
output would be 44

iterate through the expression string using a for loop
if it's a digit/number- push it to the stack
when we see an operator, pop off the stack twice and do the math
then add it back to the stack
and when the stack is empty, return the calculation/result

*/

const evaulateExpression = (exp) => {
  if (exp.length === 0) {
    return -1;
  }

  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    if (exp[i].match(/^[0-9]+$/)) {
      stack.push(exp[i]);
      console.log(stack);
    }
    if (exp[i] === "*" || exp[i] === "+") {
      let firstNum = Number(stack.pop());
      let secondNum = Number(stack.pop());
      console.log(firstNum, secondNum);
      if (exp[i] === "*") {
        stack.push(firstNum * secondNum);
      } else {
        stack.push(firstNum + secondNum);
      }
    }
  }
  return stack[0];
};

console.log(evaulateExpression("483+*")); // 44
console.log(evaulateExpression("378*+")); // 59
console.log(evaulateExpression("12+3*")); // 1+2=3*3=9
