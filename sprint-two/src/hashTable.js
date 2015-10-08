

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var entry = this.makeEntry(k, v);

  if (!this._storage[index]) {
    this._storage[index] = entry;
  } else {
    var current = this._storage[index];
    var hasChild = true;
    while(hasChild){
      if (current.key === k){
        current.value = v;
        return;
      }
      if(current.next){
        current = current.next;
      } else {
        hasChild = false;
      }
    }
    current.next = entry;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === null) {
    return null;
  } else if (this._storage[index].next === null) {
    return this._storage[index].value;
  } else {
    var current = this._storage[index];
    while (current.key !== k) {
      current = current.next;
    }
    return current.value;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index].next === null) {
    this._storage[index] = null;
  } else if (this._storage[index].key === k) {
    this._storage[index] = this._storage[index].next
  } else {
    var current = this._storage[index]
    while (current.next.key !== k) {
      current = current.next;
    }
    current.next = current.next.next
  }
};

HashTable.prototype.makeEntry = function (k,v) {
  var obj = { key : k, value : v, next : null }
  return obj;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


