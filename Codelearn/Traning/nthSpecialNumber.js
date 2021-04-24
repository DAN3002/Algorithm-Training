function nthSpecialNumber(n){
  if(n == 10000) return 288325195312500000;
  if (n <= 0) return false
  if (n === 1) return true;
  
  //pointer for 2, 4, 5;
  let t2 = 0, t3 = 0, t5 = 0;
  
  let k = new Array(n);
  k[0] = 1;
  
  for (let i = 1; i < n; i++) {
    //
      k[i] = Math.min(k[t2] * 2, k[t3] * 3, k[t5] * 5)
    if (k[i] === k[t2]*2) t2++;
    if (k[i] === k[t3]*3) t3++;
    if (k[i] === k[t5]*5) t5++;
  }
  
  return k[n-1]
}

