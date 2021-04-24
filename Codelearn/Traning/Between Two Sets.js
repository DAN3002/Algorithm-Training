function total(arr,brr){
    arr.sort((a,b) => a-b);
    brr.sort((a,b) => a-b);
    const gcd = gcdArray(brr);

    if(gcd % arr.slice(-1)[0] !== 0) return 0;
    
    const lcm = lcmOfArray(arr);

    let count = 0;
    for(let i = 1; i <= Math.floor(gcd/lcm); i++) {
        if(gcd % (lcm*i) == 0) count++;
    }

    return count;

}

function lcmOfArray(arr) {
   let lcm = arr[0];
   for(let i = 1; i < arr.length; i++)
   {
      lcm = LMC(lcm, arr[i]);
   }
   return lcm;
}

function gcdArray(arr) {
   let gcd = arr[0];
   for(let i = 1; i < arr.length; i++)
   {
      gcd = GCD(gcd, arr[i]);
   }
   return gcd;
}

function LMC(a,b) {
    return (a*b) / GCD(a,b);
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}
