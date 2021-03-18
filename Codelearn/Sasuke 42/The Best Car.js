function theBestCar(a,b){
    a = a.map((el,index) => b[index] / el);
    let max = Math.max(...a);
    return a.findIndex(el => el == max);
 
}