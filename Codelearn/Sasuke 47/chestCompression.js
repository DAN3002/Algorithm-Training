function chestCompression(a){
    let max = -1;
 
    for(let i = 1; i < a.length - 1; i++) {
        const cal = a[i] + a[i-1] + a[i + 1];
        max = Math.max(cal, max);
    }
 
    return max;
}