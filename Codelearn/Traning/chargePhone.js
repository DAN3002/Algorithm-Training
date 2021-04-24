function chargePhone(s1, s2, t) {
   const map = [60*60, 60, 1];

   s1 = s1.split(":")
   .map((el,index) => map[index]*parseInt(el))
   .reduce((a,b) => a+b,0);

   s2 = s2.split(":")
   .map((el,index) => map[index]*parseInt(el))
   .reduce((a,b) => a+b,0);

   return Math.min(100, Math.floor((s2 - s1) / (t*60)));
}