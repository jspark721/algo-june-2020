/*
1. Write an algorithm to determine if a linkedlist is a palindrome

Edge Cases: if linked list is empty or only has 1 value, it's a palindrome
Constraints: optimize 

example
a -> b -> b -> a // true
a -> b -> c -> d // false

use slow and fast pointers, reverse half of the linked list from the middle and then check if the values matches and if it does, then it's a palindrome, if not, return false

so for the above example list a -> b -> b -> a
we can move the slow pointer to the middle, so when it gets to b, we can reverse the right part of the list, so that will be a -> b
and then we'll compare to the left part of the list which is also a -> b
so it will return true since it's a palindrome
*/

const linkedListPalindrome = (head) => {
  //always check edge cases
  if (head === null || head.next === null) {
    return true;
  }

  //initialize slow and fast pointers to head
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; //move the fast pointer 2 steps and when it reaches the end, we'll come out of the loop and the slow pointer will be in the middle of the list
    slow = slow.next;
  }

  //put the fast pointer back at head
  fast = head;
  //reverse the right half of the list where the slow pointer is currently pointing at
  slow = reverseList(slow);

  //while slow is not null, we'll compare if the fast and slow pointer values match
  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    //traverse down the list to compare all values
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

const reverseList = (head) => {
  let prev = null;
  let current;
  while (head !== null) {
    current = head;
    head = current.next;
    current.next = prev;
    prev = current;
  }
  return prev;
};
