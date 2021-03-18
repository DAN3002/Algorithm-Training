let max = 0;
 
function amountVaries(n){
    solve(n, 0);
 
    return max;
}
 
function solve(n, count){
    if(n < 10){
        max = Math.max(count, max);
        return;
    }
 
    n = [...n.toString()].map(el => parseInt(el));
    const sum = n.reduce((a,b) => a + b,0);
    const muntiple = n.reduce((a,b) => a * b,1);
 
    solve(sum, count + 1);
    solve(muntiple, count + 1);
}