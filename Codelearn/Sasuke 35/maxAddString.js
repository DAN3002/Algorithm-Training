function maxAddString(arr, k) {
   if(arr.every(el => el == 0)) return '0';
   arr.sort((a,b) => b-a);
 
   arr = arr.slice(0, k);
 
   arr = arr.sort((a,b) => {
      a = a.toString();
      b = b.toString();
 
      return (b+a).localeCompare(a+b);
   });
    
   return arr.join(""); 
}