var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var first = 0;
  var last = 0;  

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    if (last-first > 0) {
      var toReturn = storage[first];
      delete storage[first];
      first++;
      return toReturn;
    }
  };

  someInstance.size = function() {
    return last-first;
  };

  return someInstance;
};
