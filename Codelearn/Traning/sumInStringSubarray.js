function sumInStringSubarray(s){
    let arr = Array.from(s).map(el => parseInt(el));
    let sum = 0;
    for(let i = 1; i <= s.length; i++)
    {
        for(let j = 0; j <= s.length - i; j++)
        {
            sum += arr.slice(j, j + i).reduce((a,b) => a+b,0);
        }
    }
    return sum;
 
}
 