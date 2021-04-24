function powTwo(n){
    let count = 0;
    for(let i = 2; i <= n; i += 2)
    {
        let el = i;
        while(el % 2 == 0)
        {
            el /= 2;
            count++;
        }
    }
    return count;
}
