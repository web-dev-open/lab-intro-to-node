
class SortedList {
  constructor() {
     this.items = [];
     this.length = 0;
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

    if(pos>=0 && pos < this.items.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
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
     },0)
     return sum;
  }

  avg() {
    if(this.items.length===0){
      throw new Error('EmptySortedList')
    }

    let total_sum = this.sum() 
    let average = total_sum/this.items.length;
    return average;
  }
}

module.exports = SortedList;
