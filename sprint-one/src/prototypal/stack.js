var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
  someInstance.storage = {}
  someInstance.count = 0

  return someInstance
}

var stackMethods = {}
stackMethods.push = function (value) {
  this.count++
  this.storage[this.count] = value
}
stackMethods.pop = function () {
  if (this.count > 0) {
    var returnVal = this.storage[this.count]
    this.count--
    return returnVal
  }
}
stackMethods.size = function () {
  if (this.count >= 0) return this.count
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  }
}
