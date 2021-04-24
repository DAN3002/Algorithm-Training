function smallestNumber2(a){
    let out = 1;
    for(let i = 2; i <= a; i++)
    {
        let count = 0;
        for (; a % i == 0; a /= i) count++;
        if(count % 2 != 0) out *= i;
    }    
    return out;
}