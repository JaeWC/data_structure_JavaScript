var Queue = function () {
  var someInstance = {}

  // Use an object with numeric keys to store values
  var storage = {}
  var id = 0

  // Implement the methods below
  // Adding a string to the back of the queue
  someInstance.enqueue = function (value) {
    storage[id] = value
    id++
  }

  // Remove and return the string at the front of the queue
  someInstance.dequeue = function () {
    if (id > 0) {
      var minIdx = Math.min.apply(null, Object.keys(storage))
      var returnVal = storage[minIdx]
      delete storage[minIdx]
      return returnVal
    };
  }
  // Return the number of items in the queue
  someInstance.size = function () {
    var lengthQueue = Object.keys(storage).length
    return lengthQueue
  }

  return someInstance
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  }
}
