function countPassStudent(arr) {
   let sum = arr.reduce((a,b) => a+b, 0);
 
   let mean = sum / arr.length;
   return arr.filter(el => el >= mean).length;
}