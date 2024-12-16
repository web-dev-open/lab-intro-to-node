class SortedList {
  constructor() {
    // Initialize the list with an empty array
    this.items = [];
    this.length = 0;
  }

  // Iteration 2: Add an item while maintaining order
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // Sort array in ascending order
    this.length = this.items.length; // Update the length property
  }

  // Iteration 3: Get an item at a specified position
  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds'); // Error if position is invalid
    }
    return this.items[pos]; // Return the element at the specified position
  }

  // Iteration 4: Get the max value
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); // Error if the list is empty
    }
    return this.items[this.length - 1]; // The last element is the highest value in sorted list
  }

  // Iteration 5: Get the min value
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); // Error if the list is empty
    }
    return this.items[0]; // The first element is the lowest value in sorted list
  }

  // Iteration 6: Get the sum of all elements
  sum() {
    return this.length === 0 ? 0 : this.items.reduce((acc, val) => acc + val, 0); // Sum all elements or return 0 if empty
  }

  // Iteration 7: Get the average of all elements
  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); // Error if the list is empty
    }
    return this.sum() / this.length; // Calculate average
  }
}

module.exports = SortedList;  // Export the class for testing

