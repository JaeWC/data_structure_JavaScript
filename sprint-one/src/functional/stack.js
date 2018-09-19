var Stack = function () {
  var someInstance = {}

  // Use an object with numeric keys to store values
  var storage = {}
  var count = 0

  // Implement the methods below

  // Add a string to the top of the stack
  someInstance.push = function (value) {
    count++
    storage[count] = value
  }

  // Remove and return the string on the top of the stack
  someInstance.pop = function () {
    if (count > 0) {
      var returnVal = storage[count]
      count--
      return returnVal
    }
  }

  // Return the number of items in the queue
  someInstance.size = function () {
    if (count >= 0) return count
  }

  return someInstance
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  }
};
