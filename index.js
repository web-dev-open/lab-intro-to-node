class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    let sum = this.items.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
