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

function Main() {
  let sll = new LinkedList();

  sll.insertFirst('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertLast('Tauhida');
  sll.insertBefore('Boomer', 'Athena');
  sll.insertAfter('Helo', 'Hotdog');
  sll.insertAt('Kat', 3);
  sll.remove('Tauhida');
}
