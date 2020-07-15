/*
Evaluate an expression given only single digits and only 2 operators * and +


example:

3 7 9 * +
given this expression, the output would be 3*7 = 21 + 9 = 30

output result would be 30


4 8 3 + * 
4 + 8 = 12 * 3 = 36
output would be 36

iterate through the expression string using a for loop
if it's a digit/number- push it to the stack
when we see an operator, pop off the stack twice and do the math
then add it back to the stack
and when the stack is empty, return the calculation/result

*/
