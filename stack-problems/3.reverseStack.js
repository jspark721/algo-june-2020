/* 

Reverse a stack and put the reversed value back in the same stack. You can use only one other stack and a temp variable

input: ['a','b','c','d'] 
output: ['d','c','b','a']

stack is last in first out
we can only use one other stack and a temp variable

pop off from current stack and push to new stack
let temp = stack.pop();
newStack.push(temp);

stack = [1,2,3,4]
temp = stack.pop = 4
newStack = [4]

keep doing that until stack is reversed?

newStack = [4,3,2,1]

time complexity: O(n)
space complexity: O(n) -- using a new stack
*/

const reverseAStack = (stack) => {
  if (stack.length === 0) {
    return stack;
  }

  let reversedStack = [];

  while (stack.length > 0) {
    reversedStack.push(stack.pop());
  }
  while (reversedStack.length > 0) {
    stack.push(reversedStack.shift());
  }
  return stack;
};

console.log(reverseAStack([1, 2, 3, 4]));
