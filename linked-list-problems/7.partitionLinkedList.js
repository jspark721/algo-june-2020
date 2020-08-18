/**
 * Write code to partition a linkedlist around a value x, such that all nodes less than x come before all nodes great than or equal to x.
 *
 * example
 * 3->1->2->4->5 x = 3
 * 1->2->3->4->5
 *
 * 1 & 2 is smaller than 3,
 * 3, 4, & 5 is equal to or greater than 3
 *
 * so we're going to create 2 dummy linked list, one smallerlist, one greaterlist
 * then we're going to iterate through the original list and check the value if it's greater or less than x, and append it to the correct list
 *
 * then concacenate the two lists
 *
 * input: linked list
 * output: sorted linked list
 * edge cases: empty or 1 node list
 * constraints: optimize
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const partitionLinkedList = (head, x) => {
  //check edge cases as always
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let smallList = new ListNode();
  let smallTail = smallList;
  let bigList = new ListNode();
  let bigTail = bigList;

  while (current !== null) {
    if (current.val < x) {
      smallTail.next = current;
      smallTail = current;
    } else {
      bigTail.next = current;
      bigTail = current;
    }
    current = current.next;
  }
  smallTail.next = bigList.next;
  bigTail.next = null;

  return smallList.next;
};

//time complexity: O(n) - iterating over the original list
//space complexity: O(1) - we are not using any extra space, we are just reforming the oringal list by moving the original nodes
