// Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class.
// The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. (...what? Do they want us to use the find function?)

function ThirdFromEnd(list) {
  if (!this.head) {
      return null;
  }
  let currNode = list.head;
  while (currNode !== null) {
    currNode = currNode.next;
  }
  if (currNode === null) {
    let foundNode = currNode - 3
    return foundNode;
  }
}
