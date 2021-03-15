function gravitation(a){
    let sum = 0;
    const n = a.length;

    for(let i = 0; i < a[0].length; i++) {
        let blockCount = 0;
        for(let j = n - 1; j >= 0; j--) {
            if(a[j][i]) {
                sum += n - (j + 1) - blockCount;
                blockCount++;
            }
        }
    }

    return sum;
}
