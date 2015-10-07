var LinkedList = function() {
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
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var toReturn = list.head.value;
    list.head = list.head.next;
    return toReturn;
  };

  list.contains = function(target, listItem) {
    var listItem = listItem || list.head;
    if (listItem.value === target) {
      return true;
    }
    else if (listItem.next === null) {
      return false;
    }
    else {
      return (list.contains(target, listItem.next))
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
