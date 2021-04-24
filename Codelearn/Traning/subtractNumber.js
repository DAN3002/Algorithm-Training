function subtractNumber(a, b){
    let count = 0;
    while(a !== 0 && b !== 0)
    {
        if(a > b)
        {
            a = a - b;
        } else b = b - a;
        count++;
    }
    return count;
}
 