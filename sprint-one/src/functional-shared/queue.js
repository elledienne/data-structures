var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    first: 0,
    last: 0
  };
  extend(obj, queueMethods)
  return obj;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    if( this.last - this.first > 0 ){
      var result = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return result;
    }
  },
  size: function() {
    return this.last-this.first;
  }
};


