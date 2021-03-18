function mafia(arr){
    let max = Math.max(...arr);
    let n = Math.ceil(arr.reduce((a,b) => a + b, 0) / (arr.length - 1));
    return Math.max(max,n);
}
 