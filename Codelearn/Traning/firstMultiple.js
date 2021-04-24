function firstMultiple(divisors, start){
    let i = start;
    while(true)
    {
        if(divisors.every(num => i % num == 0)) return i;
        i++;
    }
}
 