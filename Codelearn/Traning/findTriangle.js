function findTriangle(arr) {
   if(arr.includes(0)) return -1;
   const [a,b,c] = arr;

   if(check(a,b,c)) return a;
   if(check(b,a,c)) return b;
   if(check(c,b,a)) return c;
   return -1;
}

function check(a, b, c) {
   return Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2);
}