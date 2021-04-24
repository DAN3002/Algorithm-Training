function doingHomework(a){
    let max = a[0];
    let sum = a[0];
 
    for(let i = 1; i < a.length; i++)
    {
        if(a[i] > a[i-1])
        {
            sum += a[i];
        } else {
            max = Math.max(max, sum);
            sum = a[i];
        }
    }
 
    return max;
}
