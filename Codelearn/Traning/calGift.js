function calGift(arr, point) {
   if(arr[0] > point) return -1;
   let current = 0;
   let index = 0;
   for(let num of arr){
      current += num;
      if(current > point) return index;
      index++;
   }

   return index-1;
}
