function trianglesPointed(a, b){
    a = Math.pow(a,2);
    b = Math.pow(b,2);
    let min = Math.sqrt(a + b);
    min = Number.isInteger(min) ? min - 1 : Math.floor(min);
    let max = Math.sqrt(Math.max(a - b, b - a));
    max = Number.isInteger(max) ? max + 1 : Math.ceil(max);
 
    return [max, min];
}