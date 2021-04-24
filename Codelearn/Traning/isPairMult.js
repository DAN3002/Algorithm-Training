function isPairMult(arr, n){
    for(let i = 0; i < arr.length; i++)
    {
        if(n % arr[i] == 0)
        {
            for(let j = i + 1; j < arr.length; j++)
            {
                if(arr[j] == n/arr[i]) return true;
            }
        }
    }
    return false;
}
 