var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item) {
  for (var key in this.storage) {
    if (key === JSON.stringify(item)) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (key === JSON.stringify(item)) {
      delete this.storage[key];
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
