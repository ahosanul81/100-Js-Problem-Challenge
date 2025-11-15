/********
 * You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 * 
 * 
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next === undefined ? null : next;
}
const arrayToList = (arr) => {
  if (arr.length === 0) return;
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

const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);

const mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);

  let current = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1 !== null) current.next = list1;
  if (list2 !== null) current.next = list2;

  return dummy.next;
};

const result = mergeTwoLists(list1, list2);
// console.log(JSON.stringify(result, null, 2));
