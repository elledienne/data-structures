

var HashTable = function() {
  this._limit = 2;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //console.log(k, "k")
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
  //check to resize
  this.checkToDouble(this._storage[index].length);
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
    bucket.splice(toRemove, 1);
    if(bucket.length === 0){
      this._storage[index] = null;
    } else {
      this.checkToHalve(this._storage[index].length)
    }
  }
  return null;


};

HashTable.prototype.checkToDouble = function(length) {
  if ((length/this._limit)*100 >= 75) {
    this._limit *= 2
    this.reshuffleEvents();
  }
}
HashTable.prototype.checkToHalve = function(length) {
    if ((length/this._limit)*100 <= 25) {
    this._limit /= 2
    this.reshuffleEvents();
  }
}
HashTable.prototype.reshuffleEvents = function() {
  var backup = this._storage;
  backup = _.flatten(backup);
  this._storage = LimitedArray(this._limit);
  for( var i = 0; i < backup.length; i += 2){
    if (typeof backup[i] !== "function") {
      this.insert(backup[i], backup[i+1]);
    }
  }
}





/*
 * Complexity: What is the time complexity of the above functions?
 */


