function isPolygons(arr){
    let sum = arr.reduce((a,b) => a+b,0);
 
    return arr.every(el => el < sum - el);
}