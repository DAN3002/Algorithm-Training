function antiPrimes(k){
    const f = Array(k + 1).fill(2);

    for(let i = 1; i <= k / 2; i++) {
        for(let j = i * 2; j < k; j += i) {            
            f[j]++;
        }
    }

    let max = 0;
    for(let i = 0; i <= k; i++) {
        if(f[i] >= f[max]) {
            max = i;
        }
    }    

    return max;
}
