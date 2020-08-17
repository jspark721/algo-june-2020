/**
 * Write code to remove duplicates from an unsorted linked list. Follow up: How would you solve it if temporary buffer is not allowed?
 *
 * do we return the list with the duplicate removed?
 * or do we return the duplicate node that's been removed?
 *
 * 3->5->3->1
 * 3->5->1
 *
 * use two loops
 */

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

const removeDuplicates = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let current = head;
  while (current != null) {
    let temp = current;
    while (temp.next != null) {
      if (current.value == temp.next.value) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    current = current.next;
  }
  return head;
};

let mylist = new ListNode(11);
mylist.next = new ListNode(3);
mylist.next.next = new ListNode(11);
mylist.next.next.next = new ListNode(3);
mylist.next.next.next.next = new ListNode(21);
/*
11->3->11->3->21
//should return
11->21
*/

console.log(removeDuplicates(mylist));

// time complexity: O(n^2)
// space complexity: O(1) // not using temporary buffer
