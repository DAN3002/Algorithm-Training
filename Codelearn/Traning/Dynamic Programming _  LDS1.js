function lDS1(arr){
    let maxCount = 0;
    let f = Array(arr.length).fill(1);
 
    for(let i = 0; i < arr.length; i++)
    {
        let max = 1;
        for(let j = 0; j < i; j++)
        {
            max = Math.max(max, f[j] + 1);
        }
    }
        f[i] = max;
            if(arr[j] > arr[i])
        maxCount = Math.max(max, maxCount);
 
    return maxCount;
}