function countSolution(n, m){
    let count = 0;
    for(let a = 0; a <= Math.sqrt(n); a++)
    {
        let b = n - Math.pow(a,2);
        if(Math.pow(b,2) + a == m) count++;
    }
    return count;
}
 