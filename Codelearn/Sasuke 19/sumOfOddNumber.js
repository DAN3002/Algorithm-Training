function sumOfOddNumber(a, b){
    let out = 0;
    for(let i = a; i <= b; i++)
    {
        if(i % 2 !== 0) out += i;
    }
    return out;
}
 