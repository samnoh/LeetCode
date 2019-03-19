// 19/03/19
// LeetCode Add Two Numbers (Medium)
// https://leetcode.com/problems/add-two-numbers/

/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

e.g.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

// solution: 128ms (faster than 72.73%), 39.6MB (less than 13.64%)
let addTwoNumbers = function (l1, l2) {
    const result = new ListNode();
    let cur1 = l1, cur2 = l2, cur3 = result, ten = 0;

    while (cur1 != null || cur2 != null) {
        let a = 0, b = 0;

        if (cur1 != null) {
            a = cur1.val;
            cur1 = cur1.next;
        }
        if (cur2 != null) {
            b = cur2.val;
            cur2 = cur2.next;
        }

        const sum = a + b + ten;
        ten = parseInt(sum / 10);
        cur3.val = sum % 10;

        if (cur1 != null || cur2 != null) {
            cur3.next = new ListNode();
            cur3 = cur3.next;
        }
    }

    if (ten) {
        cur3.next = new ListNode(1);
    }

    return result;
}


// definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createListNode(arr, head = new ListNode()) {
    let current = head;
    for (let i = 0; i < arr.length; i++) {
        current.val = arr[i];
        if (i < arr.length - 1) {
            current.next = new ListNode();
            current = current.next;
        }
    }

    return head;
}

function printListNode(head) {
    let current = head, arr = new Array();
    while (current != null) {
        arr.push(current.val);
        current = current.next
    }
    console.log(arr);
}
const l1 = createListNode([2, 4, 3]);
const l2 = createListNode([5, 6, 4])
const l3 = createListNode([1, 8])
const l4 = createListNode([0])
const l5 = createListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
const l6 = createListNode([5, 6, 4]);
const l7 = createListNode([1]);
const l8 = createListNode([9, 9]);

printListNode(addTwoNumbers(l1, l2)) // [7, 0, 8]
printListNode(addTwoNumbers(l3, l4)) // [1, 8]
printListNode(addTwoNumbers(l5, l6)); // [6, 6, 4, 0, 0, ..., 0, 1]
printListNode(addTwoNumbers(l7, l8)) // [0, 0, 1]