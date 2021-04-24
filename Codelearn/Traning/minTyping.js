function minTyping(str) {
   let count = 0;
   let map = str.match(/([A-Z]+([0-9]+[A-Z]+)+)|([A-Z]+)/g);
   for(let s of map)
   {
      let cal = s.match(/[A-Z]/g).length;
      if(cal <= 4) count += cal;
      else count += 4;
   }
   return count;
}