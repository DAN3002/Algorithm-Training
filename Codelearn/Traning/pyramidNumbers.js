function pyramidNumbers(n){
    let x = Math.ceil(Math.sqrt(n));
    let maxRow = x*2 - 1;
    let y = Math.pow(x,2) - n;
    
    return [x, x % 2 == 0 ? maxRow - y : y + 1];
}
