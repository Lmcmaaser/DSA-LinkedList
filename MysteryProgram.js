// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?


function WhatDoesThisProgramDo(lst) {
    // current  is the first node in the list
    let current = lst.head;
    // while the first node in the list is not null...
    while (current !== null) {
        //new node = the current node
        let newNode = current;
        // while there is still another node next in the list
        while (newNode.next !== null) {
          // if the value of the next node is equal to the value of the current node
            if (newNode.next.value === current.value) {
              //proceed to the next node in the list
              newNode.next = newNode.next.next;
            }
            else {
                // otherwise, newNode becomes the node in the position of newNode.next
                newNode = newNode.next;
            }
        }
      current = current.next;
    }
}

// time complexity of this algorithm is O(n) (maybe...)
// function takes a linked list and finds when there are two nodes in a row that don't have the same value?
