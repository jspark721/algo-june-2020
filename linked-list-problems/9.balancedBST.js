/**
 * Given a singly linked list which has data sorted in ascending order, construct a balanced BST.
 *
 * inorder traversal
 *
 * 1. find middle of the list and make it the root node
 * 2. get the middle of the left half of the list and make it the left child
 * 3. get the middle of the right half of the list and make it the right child
 *
 * convert the linked list to an array, since accessing the middle for arrays are O(1)
 *
 * time complexity: O(n)
 * space complexity: O(n) // creating a new array;
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const convertListToBST = (head) => {
  if (head === null) {
    return null;
  }
  let arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  function constructTree(nums, left, right) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = constructTree(nums, left, mid - 1);
    node.right = constructTree(nums, mid + 1, right);

    return node;
  }
  return constructTree(arr, 0, arr.length - 1);
};
