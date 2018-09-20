var _
var Tree = function (value) {
  var newTree = {}
  newTree.value = value

  // your code here
  newTree.children = []
  _.extend(newTree, treeMethods)
  return newTree
}

var treeMethods = {}

// takes any value, sets that as the targets of a node, and adss that nodes as a child of the tree
treeMethods.addChild = function (value) {
  this.children.push(new Tree(value))
  console.log(this)
}

// takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function (target) {
  var contained = false

  var recursion = function (tree) {
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].value === target) {
        contained = true
      } else {
        recursion(tree.children[i])
      }
    }
  }

  recursion(this)
  return contained
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Tree
}
