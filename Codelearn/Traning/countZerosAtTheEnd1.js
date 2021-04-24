function countZerosAtTheEnd1(n) {
    let count = 0;
    let count2and5 = [0, 0];
    for (let i = n; i >= 2; i -= 2) {
        let j = i;
        let p = 2;
        while(j > 1) {
            while(j % p === 0) {
                j /= p;
                count2and5[p === 2 ? 0 : 1]++;
            }
            p += 3;
            if(p > 5) break;
        }
    }
    if(count2and5.every(p => p > 0)) {
        count = Math.min.apply(null, count2and5);
    }
    return count;
}
