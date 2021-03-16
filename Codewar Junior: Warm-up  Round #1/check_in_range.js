function checkInRange(a,b,n){
    let count = 0;
    let sum = 0;
    for(let i = a; i <= b; i++)
    {
        if(i % 3 == 0 && i % 2 != 0)
        {
            count++;
            sum += i;
        }
    }
    return count >= n ? sum : count;
}