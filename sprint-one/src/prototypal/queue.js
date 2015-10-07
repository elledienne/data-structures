var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods)
  obj.first = 0;
  obj.last = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue : function(){
    if (this.last-this.first > 0) {
      var toReturn = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return toReturn;
    }
  },
  size : function() {
    return this.last-this.first;
  }
};


