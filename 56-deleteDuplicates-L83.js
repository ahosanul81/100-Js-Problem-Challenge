/********************problrm - 56 ****************
 * 83. Remove Duplicates from Sorted List
Easy
Topics
premium lock icon
Companies
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */

function ListNode(val, next = null) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const arrayToList = (arr) => {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

const deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next !== null && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  return listToArray(head);
};
let head = arrayToList([1, 1, 2, 3, 3]);
const result56 = deleteDuplicates(head);
// console.log(result56);
