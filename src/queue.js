const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.first) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    const node = this.first;
    this.first = this.first.next;
    this.length--;
    return node.value;
  }
}

module.exports = {
  Queue
};
