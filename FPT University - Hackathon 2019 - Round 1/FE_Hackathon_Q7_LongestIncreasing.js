function longestIncreasing(n, arr){
    let max = 0;
    let currentMax = 1;
    let current = arr[0];
    for(let i = 1; i < n; i++)
    {
        if(arr[i] > current)
        {
            current = arr[i];
            currentMax++;
        } else {
            current = arr[i];
            if(currentMax > max) max = currentMax;
            currentMax = 1;
        }
    }
    if(currentMax > max) max = currentMax;
    return max;
}
 