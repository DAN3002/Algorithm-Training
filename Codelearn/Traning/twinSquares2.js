function twinSquares2(n){
    let cal = 2*n + 1;
    cal = Math.pow(cal, 2);
 
    let x1 = Math.floor((cal - 1) / 2);
    let x2 = Math.floor((cal + 1) / 2);    
 
    return [x1*x1, x2*x2];
}