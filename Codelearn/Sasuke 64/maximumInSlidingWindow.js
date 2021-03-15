function maximumInSlidingWindow(a,k){
    let out = [];
 
    let max = a[0];
    for(let i  = 1; i <= k-1; i++) {
        max = Math.max(max, a[i]);
    }
 
    for(let i = 0; i <= a.length - k; i++) {
        if(a[i-1] === max) {
            max = a[i];
            for(let j = i; j <= i+k-1; j++) {
                max = Math.max(max, a[j]);
            }            
        } else {
            max = Math.max(max, a[i+k-1]);
        }
 
        out.push(max);
    }
 
    return out;
}