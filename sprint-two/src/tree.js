var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  newTree.children = [];
  this.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target, node) {
  node = node || this;
  // if node contains value
  if (node.value === target) {
    return true;
  }
  else if (node.children) {
    var seenTarget = false
    for (var i = 0; i < node.children.length; i++) {
      seenTarget = node.contains(target, node.children[i])
      if (seenTarget) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.traverse = function(callback) {
  var current = this
  while (current.parent) {
    current = current.parent
  }

  var travelDown = function(node) {
    callback(node.value, node);
    if (node.children.length) {
      node.children.forEach(function(child) {
        travelDown(child);
      });
    }
  }

  travelDown(current);

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
