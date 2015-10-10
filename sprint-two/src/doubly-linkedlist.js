var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    //first item in list
    if (!list.head) {
      list.head = node;
      // any subsequent item   
    } else {
      node.previous = list.tail;
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var toReturn = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return toReturn;
  };

  // list.contains = function(target, listItem) {
  //   var listItem = listItem || list.head;
  //   if (listItem.value === target) {
  //     return true;
  //   } else if (listItem.next === null) {
  //     return false;
  //   } else {
  //     return (list.contains(target, listItem.next))
  //   }
  // };

  list.contains = function(target, listItem) {
    var listItem = listItem || list.head;
    if (listItem.value === target) {
      return true;
    } else {
      while (listItem.next) {
        listItem = listItem.next;
        if (listItem.value === target) {
          return true;
        }
      }
      return false;
    }
  };

  list.addToHead = function(value) {
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeTail = function() {
    var tailToBeRemoved = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    tailToBeRemoved.previous = null;
  };

  return list;
};

console.log("hello")
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */