/**
 * Clone a linked list with a random pointer
 *
 * questions: so the linked list has a next pointer and a random pointer pointing to a different node?
 *
 * a regular node only has value and next pointer, but this has a random pointer as well
 * 
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random
 * }
 * /

/* 
We can use a hash table to get constant access to the cloned list and assign the random and next pointers to the clone 

once we go through the linked list once and add all the values to the hashtable/map, we can go back and set/connect the pointers to the correct spots by using the constant access time hashtable

linked list [val, random] --> next
[1, 7], [2, 1], [7, 2] --> null
*/

const cloneLinkedList = (head) => {
  //always check for edge cases, if the list is empty
  if (head == null) {
    return head;
  }

  //create a hashmap
  let clonedList = new Map();
  let current = head;
  while (current !== null) {
    //give all the nodes mapping to the cloned value
    clonedList.set(current, new Node(current.val));
    current = current.next;
    /*
    Map{
      val: 1,
      next: { val: 2, next: {val: 7 .. etc}}
      random: 7
    } => {val: 7, next: null, random: null} (THIS IS THE CLONED VALUE, first pass of the linked list, we won't add the pointers yet)
    */
  }

  //second pass, iterate over the original list and look at the hashmap to set all the next and random pointers for the clones
  //set the current back to head to start from the beginning
  current = head;
  while (current !== null) {
    clonedList.get(current).next = clonedList.get(current.next) || null;
    clonedList.get(current).random = clonedList.get(current.random) || null;
    current = current.next;
  }

  return clonedList.get(head); //this will return the cloned list with all the next and random pointers assigned
};
