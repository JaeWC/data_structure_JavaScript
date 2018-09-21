if (typeof module === 'object' && typeof module.exports === 'object') {
  var { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers')
}

var HashTable = function () {
  this._limit = 8
  this._storage = LimitedArray(this._limit)
}

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  var innerBuckets = []
  var innerTuples = {}
  innerTuples[k] = v
  if (this._storage.get(index) === undefined) {
    innerBuckets.push(innerTuples)
    this._storage.set(index, innerBuckets)
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][k]) {
        this._storage.get(index)[i][k] = v
      } else {
        this._storage.get(index).push(innerTuples)
      }
    }
  }
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i] === undefined) {
      return undefined
    } else if (this._storage.get(index)[i][k]) {
      return this._storage.get(index)[i][k]
    }
  }
}

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  // var callback = function (bucket) {
  //   var bucket = this._storage.get(index)
  // }

  // this._storage.each(callback)

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][k]) {
      delete this._storage.get(index)[i]
    }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = HashTable
}
