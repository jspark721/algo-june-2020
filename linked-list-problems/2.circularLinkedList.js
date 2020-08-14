/**
 * Write an algorithm to determine if a linked list is circular
 *
 * follow up: determine where the circle meets
 *
 * input: linked list
 * output: boolean
 * edge cases: empty list or list with one node
 * constraints: optimize
 */
const circularLinkedList = (head) => {
  if (head == null || head.next == null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};

const detectCircularNode = (head) => {
  if (head === null || head.next === null) {
    return -1;
  }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      break;
    }
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

//time complexity: O(n)
//space complexity: O(1)
