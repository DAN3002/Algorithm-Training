let count = 0;
function splArray(arr, n, k) {
   let sumMap = [];
   for(let i = 0; i < n; i++) sumMap.push([]);
   count = 0;
   solve(arr, k, sumMap, 0);
   return count;
}

function solve(arr, k, sumMap, index) {
   if(index == arr.length){
      if(sumMap.every(el => el >= k)) {
         count++
      }
   } else {
      let el = arr[index];
      for(let i = 0; i < sumMap.length; i++){
         let newSumMap = [];
         for(let i of sumMap) newSumMap.push(i);
         newSumMap[i] = Number(newSumMap[i]) + el;
         solve(arr, k, newSumMap, index + 1);
      }
   }

}