'use strict';

// 1. printIndices
function printIndices(items) {
  for (const item in items){
    console.log(item);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const everyOtherLst = [];
  for(const i=0; i< items.length; i+=2){
  }
  return everyOtherLst.push(items[i]);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = sort(items);
  sortedItems.slice(0, n);
  const reversedList = sortedItems.reversed();

  return reversedList;
  
}


