class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos]
    }
    throw new Error('OutOfBounds')
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList')
    }
    return this.items[this.length - 1]
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    return this.items.reduce((sum, curr) => 
      curr + sum, 0
    )
    }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList')
    }   
    return this.sum() / this.length
  }
}

module.exports = SortedList;
