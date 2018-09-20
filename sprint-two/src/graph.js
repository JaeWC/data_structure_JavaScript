// Instantiate a new graph
var Graph = function () {
  this.storage = []
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  // var innerObj = {}
  // innerObj.value = node
  this.storage.push({ value: node, edge: [] })
  console.log(this.storage)
}

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true
    }
  }
  return false
}

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1)
    }
  }
}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var hasOrNot = 0
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      if (this.storage[i].edge.includes(toNode)) {
        hasOrNot += 1
      }
    }
    if (this.storage[i].value === toNode) {
      if (this.storage[i].edge.includes(fromNode)) {
        hasOrNot += 1
      }
    }
  }
  if (hasOrNot === 2) {
    return true
  }
  return false
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      this.storage[i].edge.push(toNode)
    }
    if (this.storage[i].value === toNode) {
      this.storage[i].edge.push(fromNode)
    }
  }
}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      this.storage[i].edge.splice(this.storage[i].edge.indexOf(toNode), 1)
    }
    if (this.storage[i].value === toNode) {
      this.storage[i].edge.splice(this.storage[i].edge.indexOf(fromNode), 1)
    }
  }
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  this.storage.forEach(function (elem) {
    cb(elem.value)
  })
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Graph
}
