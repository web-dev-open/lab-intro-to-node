let mocha = require('mocha')

class SortedList {
  constructor(items,length) {
     this.items = items;
     this.length = length;
  }

  add(item) {
    
    this.items.push(item);

    this.length = this.items.length;

    this.items.sort((a,b)=>{
      if(a<b){
        return -1;
      }
      else if(a > b){
        return 1;
      }
      else{
        return 0;
      }
    })

    return this.items;
  }

  get(pos) {

    if(pos<0 && p>=this.items.length){
      throw new Error('OutOfBounds');
    }
    else{
      return this.items[pos];
    }
    
  }

  max() {
     if(this.items.length===0){
      throw new Error('EmptySortedList')
     }
     else{
        return this.items[this.items.length-1];
     }
  }

  min() {
    if(this.items.length===0){
      throw new Error('EmptySortedList')
     }
     else{
        return this.items[0];
     }
  }

  sum() {
     let sum = this.items.reduce((accum, current)=>{
      return accum + current
     })
     return sum;
  }

  avg() {
    let sum = this.items.reduce((accum, current)=>{
      return accum + current
     })
    let average = sum/this.items.length;
    return average;
  }
}

module.exports = SortedList;
