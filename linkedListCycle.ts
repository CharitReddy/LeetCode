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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let visitSet = new Set();
  let currentNode = head;
  while (currentNode != null) {
    if (visitSet.has(currentNode)) return currentNode;
    visitSet.add(currentNode);
    currentNode = currentNode.next;
  }
  return null;
}
