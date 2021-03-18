function minNotPay(arr) {
   arr.sort((a,b) => a-b);
   let current = 0;
 
   for(let i of arr) {
      if(i > current + 1) return current + 1;
      current += i;
   }
 
   return current + 1;
}