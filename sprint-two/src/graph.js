// Instantiate a new graph
var Graph = function () {
  this.storage = []
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage.push({ value: node, edge: [] })
}

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  var containNode = false
  this.storage.forEach((elem) => {
    if (elem.value === (node)) containNode = true
  })
  return containNode
}

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  var nodeIndex = this.storage.findIndex((elem) => elem.value === node)
  this.storage.splice(nodeIndex, 1)
}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var containEdge = 0
  this.storage.forEach((elem) => {
    if (elem.value === fromNode) containEdge += elem.edge.includes(toNode)
    if (elem.value === toNode) containEdge += elem.edge.includes(fromNode)
  })
  return containEdge === 2
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage.forEach((elem) => {
    if (elem.value === fromNode) elem.edge.push(toNode)
    if (elem.value === toNode) elem.edge.push(fromNode)
  })
}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  var edgeIndex
  this.storage.forEach((elem) => {
    if (elem.value === fromNode) {
      edgeIndex = elem.edge.indexOf(toNode)
      elem.edge.splice(edgeIndex, 1)
    }
    if (elem.value === toNode) {
      edgeIndex = elem.edge.indexOf(fromNode)
      elem.edge.splice(edgeIndex, 1)
    }
  })
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  this.storage.forEach((elem) => cb(elem.value))
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Graph
}
