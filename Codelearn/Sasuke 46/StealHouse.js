function stealHouse(arr){
    if(arr.length == 0) return 0;
 
    arr = arr.map(el => el < 0 ? 0 : el);
 
    let f = Array(arr.length);
    f[0] = arr[0];
    f[1] = Math.max(arr[1], arr[0]);
    for(let i = 2; i <= arr.length - 1; i++)
    {
        f[i] = Math.max(f[i - 1], arr[i] + f[i - 2], f[i-2]);
    }
    return f[arr.length - 1];    
}