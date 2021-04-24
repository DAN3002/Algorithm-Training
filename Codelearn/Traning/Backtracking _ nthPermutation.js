function nthPermutation(n, k){
    let map = [];
    for(let i = 1; i <= n; i++) map.push(i);
    for(let j = 2; j <= k; j++)
    {
        map = nextNumber(map);
    }   
    return map;
    
}

function nextNumber(arr)
{
    let i, k;
    for(i = arr.length - 2; i >= 0; i--)
    {
        if(arr[i] < arr[i + 1]) break;
    }
    k = null;
    for(let j = i + 1; j < arr.length; j++)
    {
        if(k == null || (arr[j] < arr[k] && arr[j] > arr[i])) k = j;
    }    
    arr = swap(arr, i, k);
    arr = arr.slice(0,i + 1).concat(arr.slice(i + 1).reverse());
    return arr;
}

function swap(arr, i, k)
{
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    return arr;
}