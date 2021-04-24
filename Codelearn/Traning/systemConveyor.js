function systemConveyor(a, k){
    let count = 1;
    let current = 0;
    for(let i of a)
    {
        current += i;
        if(current > k)
        {
            count++;
            current = i;
        }
    }
    return count;
}
 