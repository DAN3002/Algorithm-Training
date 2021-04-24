function oddDivisors(a, b){
    let count = 0;
    for(let i = a; i <= b; i++)
    {
        if(Number.isInteger(Math.sqrt(i))) count++;
    }
    return count;
}
 