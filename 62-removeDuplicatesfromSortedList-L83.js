/**************
 * 83. Remove Duplicates from Sorted List
Easy
Topics
premium lock icon
Companies
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const arrayToList = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;
  let i = 1;
  while (i < arr.length) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    i++;
  }
  return head;
};
const list = arrayToList([1, 1, 2, 2, 5, 5, 5, 5]);

const deleteDuplicates = function (head) {
  let current = head;
  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
console.log(deleteDuplicates(list));
