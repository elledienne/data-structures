var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var length = 0;
  someInstance.push = function(value) {
    length++;
    storage[length] = value;
  };

  someInstance.pop = function() {
    if (length > 0) {
      var toReturn = storage[length]
      delete storage[length];
      length--;
      return toReturn;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
