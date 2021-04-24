function pairOfSpecialPrimes(l, r){
    let arr = Array(r+1);    
    arr.fill(true);
    arr[0] = false;
    arr[1] = false;
    let count = 0;

    for(let i = 2; i <= r ; i++)
    {
        if(arr[i] == true)
        {
            for(let j = i*2; j <= r; j += i)
            {
                arr[j] = false;
            }
        }
    }
    // console.log(arr);
    for(let i = l; i <= r-6; i++)
    {
        if(arr[i] == true && arr[i+6] == true)
        {
            // console.log(i);
             count++;
        }
    }
    return count;
}
