// Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.
//
// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

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
  console.log(sll)
}

// I think this is right
function displayLinkedList(list) {
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
displayList(sll);

function countNodes(list) {
  let totalNodes = 1;
  let currNode = list.head
  while(currNode.next !== null) {
    totalNodes++;
    currNode = currNode.next;
  }
  return totalNodes;
  console.log(totalNodes)
}
countNodes(sll);

function isEmpty(list) {
  if (list.head === null) {
    console.log('List is empty');
    return;
  } else {
    console.log('List is not empty');
    return;
  }
};
isEmpty(sll);

//maybe 
function findPrevious(list, givenNode) {
  let currNode = list.head
  let previousNode = givenNode - 1
  if (!list.head) {
    return null;
  }
  while (currNode !== previousNode) {
    currNode = currNode.next;
  }
  if (currNode === previousNode) {
    console.log(previousNode);
    return;
  }
}
findPrevious(ssl, 3)

//maybe
function findLast() {
  let currNode = list.head
  if (!list.head) {
    return null;
  }
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode
}
findLast(ssl);
