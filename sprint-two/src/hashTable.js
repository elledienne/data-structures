

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var entry = [k,v];
  var bucket = this._storage[index]

  if (!bucket) {
    this._storage[index] = [entry];
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        this._storage[index][i][1] = v;
        return;
      }
    }
    this._storage[index].push(entry);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index]

  if (bucket !== null) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  if (bucket !== null) {
    var toRemove;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        toRemove = i;
        break;
      }
    }
    this._storage[index].splice(toRemove, 1);
  }
  return null;

};





/*
 * Complexity: What is the time complexity of the above functions?
 */


