var BinarySearchTree = function (value) {
  var newBinarySearchTree = Object.create(binaryMethods)
  newBinarySearchTree.value = value
  newBinarySearchTree.left = null
  newBinarySearchTree.right = null
  return newBinarySearchTree
}

var binaryMethods = {}

// accepts a value and places in the tree in the correct position
binaryMethods.insert = function (input) {
  var recursion = function (obj) {
    if (obj.value > input) {
      if (obj.left) {
        recursion(obj.left)
      } else {
        obj.left = { value: input }
      }
    } else {
      if (obj.right) {
        recursion(obj.right)
      } else {
        obj.right = { value: input }
      }
    }
  }
  recursion(this)
}

// accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
binaryMethods.contains = function (target) {
  var recursion = function (obj) {
    if (obj.value === target) {
      return true
    } else if (obj.value > target) {
      if (obj.left) {
        return recursion(obj.left)
      }
    } else {
      if (obj.right) {
        return recursion(obj.right)
      }
    }
    return false
  }

  return recursion(this)
}

// accepts a callback and executes it on every value contained in the tree
binaryMethods.depthFirstLog = function (callback) {
  var recursion = function (obj) {
    if (obj.value) {
      callback(obj.value)
    }
    if (obj.left) {
      recursion(obj.left)
    }
    if (obj.right) {
      recursion(obj.right)
    }
  }
  recursion(this)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = BinarySearchTree
}
