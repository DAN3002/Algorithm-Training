function treeLogic(n) {
   const length = n*2 - 1,
         midle = (n % 5 == 0 ? 5 : n%5)*2 - 1;
 
   let right = "";
   let num = midle -1;
   for(let i = 1; i <= (n-1); i++)
   {
      right += num;
      num = num == 0 ? 9 : num - 1;
   }
 
   const left = [...right].reverse().join("");
 
   return `${left}${midle}${right}`;
}