function countNumber(arr,l,r){
    const lcm = lcmOfArray(arr);

    if(lcm === 0) return 0;

    return Math.floor(r/lcm) - Math.ceil(l / lcm) + 1;
}

function lcmOfArray(arr) {
   arr.sort((a,b) => a-b);

   for(let i = 0; i < arr.length; i++)
   {
      for(let j = 0; j < i; j++)
      {
           let gcd = GCD(arr[i], arr[j]);
           arr[i] /= gcd;
      }
   }

   return arr.reduce((a,b) => a*b, 1);
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}
