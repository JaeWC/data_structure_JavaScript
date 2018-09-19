var _
var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    id: 0
  }

  _.extend(someInstance, queueMethods)
  return someInstance
}

var queueMethods = {}
queueMethods.enqueue = function (value) {
  this.storage[this.id] = value
  this.id++
}
queueMethods.dequeue = function () {
  if (this.id > 0) {
    var minIdx = Math.min.apply(null, Object.keys(this.storage))
    var returnVal = this.storage[minIdx]
    delete this.storage[minIdx]
    return returnVal
  };
}
queueMethods.size = function () {
  var lengthQueue = Object.keys(this.storage).length
  return lengthQueue
}
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  }
}
