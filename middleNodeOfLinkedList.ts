/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let currentNode: ListNode = head;
  let currentNodeTwo: ListNode = head;
  while (currentNodeTwo && currentNodeTwo.next) {
    currentNodeTwo = currentNodeTwo.next?.next;
    currentNode = currentNode?.next;
  }
  return currentNode;
}
