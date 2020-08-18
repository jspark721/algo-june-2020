/**
 * Implement an algorithm to delete a node a singly linked list, given only access to that node.

 1 -> 2 -> 3 -> 4, node = 3;
 return 1 -> 2 -> 4

 return a list without the deleted node?

 are there duplicates?
 only given the node, not the list? what do we return?
 are we just building a helper function to delete a node?

 */

// const deleteNode = (head, node) => {
//   if (head === null) {
//     return head;
//   }

//   while (head !== null) {
//     if (head.val == node) {
//       head.val = head.next.val;
//       head.next = head.next.next;
//     }
//     head = head.next;
//   }

//   return head;
// };

//the above solution doesn't work because the description says we are only given the access to the node, not the head or the list

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

//time complexity: O(1) -- just changing the node value and the node's next pointer
//space complexity: O(1)
