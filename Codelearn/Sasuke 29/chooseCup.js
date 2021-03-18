function chooseCup(arr){
    if(arr.length <= 6) return arr.reduce((a,b) => a+b,0);
    arr.sort((a,b) => a-b);
    return arr.slice(0, 3).reduce((a,b) => a+b,0) + arr.slice(-3).reduce((a,b) => a+b,0);
}
 