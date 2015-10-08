
var uniqueID = function() {
  var count = 0;
  return function() {
    count++;
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

  this.connections.push(newGraph);
  newGraph.connections.push(this);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node, returnNode) {
  var checkedID = []

  var lookupNodes = function(item){
    //item = item || this;
    if(checkedID.indexOf(item.id) === -1){
      checkedID.push(item.id);
      if(item.value === node){
        return item;
      } else if(item.connections){
        var isFound = false;
        for(var i = 0; i < item.connections.length; i++){
          isFound = lookupNodes(item.connections[i]);
          if(isFound){
            return isFound;
          }
        }
      }
    }
    return false;
  }

  var result = lookupNodes(this);
  if(returnNode){
    console.log(result, "result")
    return result;
  }
  return !!result;

  // var result = false
  // this.forEachNode(function(value) {
  //   if (value === node) {
  //     result = true;
  //   }
  // });
  // return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToRemove = this.contains(node, true);
  for (var i = 0; i < nodeToRemove.connections.length; i++) {
    this.removeEdge(nodeToRemove.value, nodeToRemove.connections[i].value);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var node1 = this.contains(fromNode, true);
  var node2 = this.contains(toNode, true);
  if (node1.connections.indexOf(node2) !== -1 && node2.connections.indexOf(node1) !== -1) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var node1 = this.contains(fromNode, true);
  var node2 = this.contains(toNode, true);
  console.log(fromNode, node1);

  node1.connections.push(node2);

  node2.connections.push(node1);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var node1 = this.contains(fromNode, true);
  var node2 = this.contains(toNode, true);
  // console.log(node1.connections);
  // if (node1.connections === undefined) {
  //   debugger;
  // }
  var firstConnection = node1.connections.indexOf(node2);
  node1.connections.splice(firstConnection, 1);
  var secondConnection = node2.connections.indexOf(node1);
  node2.connections.splice(secondConnection, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var checkedID = []

  var lookupNodes = function(item, callback){
    //item = item || this;
    if(checkedID.indexOf(item.id) === -1){
      checkedID.push(item.id);
      callback(item.value);
      for (var i = 0; i < item.connections.length; i++) {
        lookupNodes(item.connections[i], callback);
      }
    }
  }

  lookupNodes(this, cb);
};

Graph.prototype.returnNode = function(node) {
  var checkedID = []

  var lookupNodes = function(item){
    //item = item || this;
    if(checkedID.indexOf(item.id) === -1){
      checkedID.push(item.id);
      if(item.value === node){
        return item;
      } else if(item.connections){
        var isFound = false;
        for(var i = 0; i < item.connections.length; i++){
          isFound = lookupNodes(item.connections[i]);
          if(isFound){
            return isFound;
          }
        }
      }
    }
    return false;
  }



}

/*
 * Complexity: What is the time complexity of the above functions?
 */


