function vaildPassword(arr) {
    let s = "qwertyuiopasdfghjklzxcvbnm";
//    let regex = /^([a-z]*|[A-Z]*)$/g;
   
   let out = [];
   for(let i of arr) {
       let check = true;
       let status = s.includes(i[0]);
       
       for(let j = 0; j < i.length; j++) {
           if(s.includes(i[j]) !== status) {
               check = false;
               break;
           }
       }

       if(check && i.length != 0) out.push(i);
   }
   return out;
}
