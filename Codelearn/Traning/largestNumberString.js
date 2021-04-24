function largestNumberString(arr){
    if(arr.every(el => el == '0')) return '0';
   arr = arr.sort((a,b) => {
      a = a.toString();
      b = b.toString();
 
      return (b+a).localeCompare(a+b);
   });
 
   return arr.join(""); 
}