class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let left = 0;
    let right = this.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if(this.items[mid] < item) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.items.splice(left, 0, item);
    this.length=this.items.length;

  }

  get(pos) {
    if(pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.length - 1];
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[0];
  }

  sum() {
    if(this.length === 0) {
      return 0;
    }

    return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
