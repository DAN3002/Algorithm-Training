function rootmultiple(N){
    let count = 0;
    while(N >= 10){
        N = reduce(N);
        count++;
    }
 
    return count;
}
 
function reduce(n){
    console.log([...n.toString()]
            .map(el => parseInt(el)))
    return [...n.toString()]
            .map(el => parseInt(el))
            .reduce((a,b) => a*b, 1);
}