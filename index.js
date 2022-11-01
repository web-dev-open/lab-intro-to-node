let m = require('mocha')

class SortedList {
  constructor(items, length){
    this.items = items;
    this.length = length;
  }
  add(item){
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((elemA, elemB)=>{
      if(elemA < elemB){
        return -1;
      }
      else if(elemA > elemB){
        return 1;
      }else{
        return 0
      }
    })
    return this.items
  };
  get(pos){
    if(pos>=0 && pos < this.items.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }    
  };
  max(){
    if(this.items.length===0){
      throw  new Error('EmptySortedList');
    }else{
      return this.items[this.item.length-1];
    }
  };
  min(){
    if(this.items.length===0){
      throw  new Error('EmptySortedList');
    }else{
      return this.items[0];
    }
  };
  sum(){
    return this.items.reduce((acc,curr)=>{
      return acc+curr});
  };
  avg(){
    let sum = this.items.reduce((acc,curr)=>{
      return acc+curr});
    return sum/this.items.length  
  }  
}

module.exports = SortedList;



