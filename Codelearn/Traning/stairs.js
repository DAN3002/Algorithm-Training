function stairs(a){
    let max = 0;
 
    for(let i = 0; i < a.length; i++)
    {
        let count = 1;
        for(let j = i + 1; j < a.length; j++)
        {
            if(a[j] > j - i) count++;
            else break;
        }
        max = Math.max(count, max);
    }
    return max;
}