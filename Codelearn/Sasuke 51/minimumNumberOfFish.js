let count = 0;

function minimumNumberOfFish(w,k){
    w.sort((a,b) => a-b);
    if(w[0] > k) return -1;

    let max = w[0];
    let i = 0;
    for(i = 0; i < w.length; i++) {
        const el = w[i];
        
        if(el <= k) max = Math.max(el, max);
        else break;
    }

    w = w.slice(i);

    solve(w, k, max);

    return count;
}

function solve(w,k,eat) {
    console.log(w, k, eat)
    if(w.length === 0) {
        if(eat == k) count++;
        return;
    }

    const time = Math.ceil((w[0]-k)/eat);

    k += eat*time;
    count += time;

    let max = w[0];
    let i = 0;
    for(i = 0; i < w.length; i++) {
        const el = w[i];
        
        if(el <= k) max = Math.max(el, max);
        else break;
    }

    w = w.slice(i);
    
    solve(w, k, max);
}
