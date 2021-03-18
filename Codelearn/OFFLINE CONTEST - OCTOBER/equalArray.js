function equalArray(arr){
    const min = Math.min(...arr);
 
    return arr.reduce((a,b) => a + b - min, 0);
}