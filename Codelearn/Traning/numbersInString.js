function numbersInString(str) {
   let count = 0;
   (str.match(/[1-9]+/g) || []).map(el => {
      let length = el.length;
      count += length*(length+1)/2;
   });
   return count;
}