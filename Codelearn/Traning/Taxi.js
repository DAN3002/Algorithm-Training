function taxi(arr){
    if(arr.every(el => el == 3)) return arr.length;
    return Math.ceil(arr.reduce((a,b) => a+b,0) / 4);
}
 