// Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.

// ok so where else can I s

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
  // insertBefore() inserts a new node before a given node containing a key.
  insertBefore(givenNode, newNode) {
    if (!this.head) {
      this.insertFirst(newNode);
    } else {
      let currNode = this.head;
      while(currNode !== null && currNode.next.value !== givenNode) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(newNode, currNode.next);
    }
  }
  insertAfter(givenNode, newNode) {
    if (!this.head) {
      this.insertFirst(newNode);
    } else {
      let currNode = this.head;
      while(currNode !== null && currNode.value !== givenNode) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(newNode, currNode.next);
    }
  }
  // inserts an item at a specific position in the linked list
  insertAt(nodeItem, nodePosition){
    if(this.head === null) {
      this.insertFirst(nodeItem);
    } else {
      let currNode = this.head;
      let nodeCount = 1;
      while((currNode !== null) && (nodeCount !== nodePosition - 1)) {
        currNode = currNode.next;
        nodeCount++;
      }
      currNode.next = new _Node(nodeItem, currNode.next);
    }
  }
  remove(nodeItem){
    if (!this.head) {
        return null;
    }
    if (this.head.value === nodeItem) {
        this.head = this.head.next;
        return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== nodeItem)) {
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

// function Main() {
//   let sll = new LinkedList();
//
//   sll.insertFirst(3);
//   sll.insertLast(2);
//   sll.insertLast(5);
//   sll.insertLast(7);
//   sll.insertLast(1);
// }

// function Sort(list) {
//   let currNode = list.head
//   while(currNode.next !== null) {
//
//   }
// }

LinkedList.prototype.addSorted = function(nodeItem) {
  insertFirst(nodeItem) {
    this.head = new _Node(nodeItem, this.head);
  }
  // I'm lost...the idea is to sort it from the start, as each node is added to the list
}
