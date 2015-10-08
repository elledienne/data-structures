var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
