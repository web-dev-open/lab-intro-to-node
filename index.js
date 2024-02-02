class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    })
  }

  get(pos) {
    if(pos >= this.length){
      throw new Error("OutofBounds");
    }
    else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[this.length-1];
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[0];
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    let sum = this.items.reduce((acc, current) => {
      return acc + current;
    })

    return sum;
  }

  avg() {
    let sum = this.items.reduce((acc, current) => {
      return acc + current;
    })
    let avg = sum/this.length;

    return avg;
  }
}

module.exports = SortedList;
