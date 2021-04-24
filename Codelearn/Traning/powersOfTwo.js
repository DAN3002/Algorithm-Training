function powersOfTwo(k, arr){
    for(let i = 0; i <= k; i++)
    {
        if(!arr.includes(Math.pow(2,i))) return Math.pow(2,i);
    }
}
 