class SortedList {
  constructor() {
    this.items = []; // Initialize items as an empty array
    this.length = 0; // Initialize length to 0
  }

  add(item) {
    // Add the item to the array
    this.items.push(item);
    // Sort the array in ascending order
    this.items.sort((a, b) => a - b);
    // Update the length property
    this.length = this.items.length;
  }

  get(pos) {
    // Check if pos is out of bounds
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    // Return the item at the specified position
    return this.items[pos];
  }

  max() {
    // Check if the items array is empty
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    // Return the maximum value
    return this.items[this.length - 1];
  }

  min() {
    // Check if the items array is empty
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    // Return the minimum value
    return this.items[0];
  }

  sum() {
    // Return the sum of the items
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    // Check if the items array is empty
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    // Return the average of the items
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
