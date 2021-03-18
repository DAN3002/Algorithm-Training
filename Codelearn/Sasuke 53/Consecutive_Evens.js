function consecutiveEvens(arr){
    let max = 0;
    const f = Array(arr.length).fill(0);
 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            f[i] = (f[i-1] || 0) + 1;
            max = Math.max(f[i], max);
        }
    }
 
    return max;
}