// Assignment: write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch

// "_" indicates a private class (should not be accessible by anyone else other than the linked list class)

// node class's constructor accepts a variable value that holds the data. Each node also has a next variable that serves as a pointer to the next node.

// generic node class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // can insert a node nodeItem using:
  //  "insertFirst"
  //  "insertLast"
  //  "insert, insertAt"
  insertFirst(nodeItem) {
    this.head = new _Node(nodeItem, this.head);
  }
  insertLast(nodeItem) {
    if (this.head === null) {
        this.insertFirst(nodeItem);
    }
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(nodeItem, null);
    }
  }
  remove(nodeItem){
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === nodeItem) {
        this.head = this.head.next;
        return;
    }
    // Starts at the head
    let currNode = this.head;
    // Keeps track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== nodeItem)) {
        // Saves the previous node
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Node item not found');
        return;
    }
    previousNode.next = currNode.next;
  }
  find(nodeItem) {
    let currNode = this.head;
    if (!this.head) {
        return null;
    }
    // Checks for the item
    while (currNode.value !== nodeItem) {
      if (currNode.next === null) {
          return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}
