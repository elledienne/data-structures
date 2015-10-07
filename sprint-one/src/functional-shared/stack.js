var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = { storage : {}, length : 0}
  extend( obj, stackMethods);
  return obj;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var stackMethods = {
  push : function(value) {
    this.length++;
    this.storage[this.length] = value;
  },
  pop: function() {
    if (this.length > 0) {
      var toReturn = this.storage[this.length]
      delete this.storage[this.length];
      this.length--
      return toReturn;
    }
  },
  size: function() {
    return this.length;
  }
};


