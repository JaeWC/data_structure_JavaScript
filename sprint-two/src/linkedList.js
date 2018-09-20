var LinkedList = function () {
  var list = {}
  list.head = null
  list.tail = null

  // takes a value and adds it to the end of the list
  list.addToTail = function (value) {
    var node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.head.next = node
      this.tail = node
    }
  }

  // removes the first node from the list and returns its value
  list.removeHead = function () {
    var removedVal = list.head.value

    this.head = list.head.next

    return removedVal
  }

  // returns boolean reflecting whether or not the passsed-in value is in the linked list
  list.contains = function (target) {
    var node = this.head
    var contained = false
    while (node) {
      if (node.value === target) {
        contained = true
      }
      node = node.next
    }
    return contained
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
