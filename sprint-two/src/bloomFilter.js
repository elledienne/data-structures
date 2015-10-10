var BloomFilter = function(length){
  this.set = [];
  this.length = length;
  this.bitFilter = []
  for (var i = 0; i < length; i++) {
    this.bitFilter.push(0);
  }
}

BloomFilter.prototype.addHash = function(string) {
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }
  return sum % this.length;
}

BloomFilter.prototype.productHash = function(string) {
  var product = 0;
  for (var i = 0; i < string.length; i++) {
    product = (product * string.charCodeAt(i)) % this.length;
  }
  return product;
}

BloomFilter.prototype.logHash = function(string) {
  var log = 0;
  for (var i = 0; i < string.length; i++) {
    log += Math.floor(Math.log(string.charCodeAt(i))); 
  }
  return log % this.length;
}

BloomFilter.prototype.totalHash = function(string, callback) {
  var hashes = [];
  hashes.push(this.addHash(string));
  hashes.push(this.productHash(string));
  hashes.push(this.logHash(string));

  for (var i = 0; i < hashes.length; i++) {
    if (callback(hashes[i]) === false) {
      return false;
    }
  }
  return true;
}

BloomFilter.prototype.insert = function(string) {
  this.set.push(string);
  this.totalHash(string, function(hash){
    console.log(this);
    this.bitFilter[hash] = 1;
  }.bind(this));
}

BloomFilter.prototype.lookup = function(string) {
  return this.totalHash(string, function(hash) {
    if (this.bitFilter[hash] === 0) {
      return false;
    }
  }.bind(this));
}

// var test = new BloomFilter(14);
// console.log(test);
// test.insert("Lorenzo");
// console.log(test);
// console.log(test.lookup("Lorenzo"), test.lookup("Laura"));
// test.insert('Laura');
// console.log(test.lookup('Laura'));
// test.insert('Pizza');
// console.log(test.lookup('Pizza'));

