if (typeof module === 'object' && typeof module.exports === 'object') {
  var { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers')
}

var HashTable = function () {
  this._limit = 8
  this._size = 0
  this._storage = LimitedArray(this._limit)
}

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit)

  var innerBuckets = []
  var innerTuples = {}
  innerTuples[k] = v
  this._size++
  if (this._size > this._limit * 0.75) {
    this.resize(this._limit * 2)
    index = getIndexBelowMaxForKey(k, this._limit)
  }
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

  this._size--
  if (this._size < this._limit * 0.25) {
    this.resize(this._limit / 2)
    index = getIndexBelowMaxForKey(k, this._limit)
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][k]) {
      delete this._storage.get(index)[i]
    }
  }
}

HashTable.prototype.resize = function (newLimit) {
  this._limit = newLimit
  var oldStorage = this._storage
  this._storage = LimitedArray(this._limit)

  oldStorage.each((pairs) => {
    if (pairs) {
      for (var i = 0; i < pairs.length; i++) {
        if (pairs[i]) {
          var pair = pairs[i]
          this.insert(Object.keys(pair)[0], Object.values(pair)[0])
          this._size--
        }
      }
    }
  })
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = HashTable
}
