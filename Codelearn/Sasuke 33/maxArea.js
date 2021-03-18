function maxArea(a){
    let max = a[0];
    for(let i = 0; i < a.length; i++)
    {
        let count = 1;
        for(let j = i - 1; j >= 0; j--)
        {
            if(a[j] < a[i]) break;
            else count++;
        }
        for(let j = i + 1; j < a.length; j++)
        {
            if(a[j] < a[i]) break;
            else count++;
        }        
        max = Math.max(a[i]*count, max);
    }
    return max;
}