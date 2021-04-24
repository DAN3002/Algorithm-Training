function gcdOfNumbers(a){
    let max = Math.max(...a);
    for(let i = max; i > 1; i--)
    {
        if(a.every(el => el%i == 0)) return i;
    }
    return 1;
}
 