/**
* Implement an algorithm to find the kth to the last element of a singly linked list

input: linked list, k value
output: node

given this list 1 -> 3 -> 5 -> 8 -> , k = 2, this would return 5
because 5 is the 2nd last element of the list

use two pointers
first pointer starts at head
second pointer starts a kth node

while second pointer is not null, keep moving the pointers by 1
when second pointer reaches null, return the node that the first pointer is pointing at and that is the kth to the last element
*/

const findKthNode = (head, k) => {
  if (head === null) {
    return head;
  }

  let first = head;
  let second = head;

  while (k > 0) {
    second = second.next;
    k--;
  }

  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  return first;
};

//time complexity: O(n + k) where n is the number of nodes in the list and k is the kth value
//space complexity: O(1)
