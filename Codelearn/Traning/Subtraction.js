function subtraction(n, k){
   while(k > 0) 
   {
    let a = n % 10;
       if(a == 0)
       {
           n /= 10;
           k--;           
       } else {
           if(a > k) return n - k;
           else {
               n -= a;
               k -= a;
           }
       }
   }
   return n;
}
 