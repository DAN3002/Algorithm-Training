let out = [];
let f;

const ADD = [1, 3, 7, 9];

function findSpecialPrime(n) {
   f = Array(n + 1).fill(true);

   for(let i = 2; i <= n; i++){
      if(f[i]){
         for(let j = i*i; j <= n; j += i) f[j] = false;
      }
   }

   const START = [2, 3, 5, 7];
   for(let i of START) {
      if(i <= n) solve(i);
   }

   return out.sort((a,b) => a-b);
}

function solve(current) {
   out.push(current);

   for(let i of ADD){
      const newNumber = current * 10 + i;
      if(f[newNumber]) solve(newNumber);
   }
}