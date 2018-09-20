var LinkedList = function () {
  var list = {}
  list.head = null
  list.tail = null

  // takes a value and adds it to the end of the list
  list.addToTail = function (value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail = new Node(value)
    }
  }

  // removes the first node from the list and returns its value
  list.removeHead = function () {
    var removedVal = list.head.value
    delete list.head
    this.head = list.tail
    return removedVal
  }

  // returns boolean reflecting whether or not the passsed-in value is in the linked list
  list.contains = function (target) {
    for (var prop in this) {
      if (this[prop].value === target) {
        return true
      }
    }
    return false
  }
  return list
}

var Node = function (value) {
  var node = {}

  node.value = value
  node.next = null

  return node
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = LinkedList
}
