var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.id = 0
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.id] = value
  this.id++
}
Queue.prototype.dequeue = function () {
  if (this.id > 0) {
    var minIdx = Math.min.apply(null, Object.keys(this.storage))
    var returnVal = this.storage[minIdx]
    delete this.storage[minIdx]
    return returnVal
  };
}
Queue.prototype.size = function () {
  var lengthQueue = Object.keys(this.storage).length
  return lengthQueue
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  }
}
