
var uniqueID = function() {
  var count = 0;
  return function() {
    count ++;
    return count;
  }
}

var generateUniqueID = uniqueID();


// ------------------------
// Instantiate a new graph
var Graph = function(value) {
  this.connections = [];
  this.value = value;
  this.id = generateUniqueID();
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newGraph = new Graph(node);

  this.addEdge(this, newGraph)
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node, returnNode) {
  var checkedID = []

  var lookupNodes = function(item){
    //item = item || this;
    console.log(item)
    if(checkedID.indexOf(item.id) === -1){
      checkedID.push(item.id);
      if(item.value === node){
        return item;
      } else if(item.connections){
        var isFound = false;
        for(var i = 0; i < item.connections.length; i++){
          isFound = lookupNodes(item.connections[i]);
          if(isFound){
            return item;
          }
        }
      }
    }
    return false;
  }

  var result = lookupNodes(this);
  if(returnNode){
    return result;
  }
  return !!result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToRemove = this.contains(node, true);
  if (nodeToRemove.connections === undefined) {
    debugger;
  }
  for (var i = 0; i < nodeToRemove.connections.length; i++) {
    this.removeEdge(nodeToRemove, nodeToRemove.connections[i]);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode.connections.push(toNode);
  toNode.connections.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var firstConnection = fromNode.connections.indexOf(toNode);
  fromNode.connections.splice(firstConnection, 1);
  var secondConnection = toNode.connections.indexOf(fromNode);
  toNode.connections.splice(secondConnection, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


