function sortArray(arr, keep) {
   let other = arr.filter(el => !keep.includes(el))
                  .sort((a,b) => a-b);
   arr = arr.map((el,index) => {
      if(keep.includes(el)) return el;
      let sort = other[0];
      other.shift();
      return sort;
   });
 
   return arr;
}