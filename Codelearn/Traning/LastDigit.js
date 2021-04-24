function lastDigit(a, b){
    if (b == 0) return 1;
    let pow = 1;
    for(let i = 1; i <= b; i++)
    {
        pow = (pow*a) % 10
    }
    return pow;
}

