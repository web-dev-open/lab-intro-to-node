class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
}

  add(item) 
  {
    // Add the item and keep the list sorted
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    // Update the length
    this.length = this.items.length;
  }


  get(pos) {
    // Check if pos is out of bounds
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    // If the list is empty, throw an error
    if (this.length === 0) {

      throw new Error('EmptySortedList');
    }
    // Return the last element (highest value since it's sorted)
    return this.items[this.length - 1];
  }

  min() {
    // If the list is empty, throw an error
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    // Return the first element (lowest value since it's sorted)
    return this.items[0];
  }


  sum() {
    // Calculate the sum using reduce
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg()
   {
    // If the list is empty, throw an error
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    // Return the average by dividing the sum by the length
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
