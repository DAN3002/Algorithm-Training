function sockMerchant(sizes){
    return sizes.reduce((a,b) => {
         a[b]++;
    }, Array(1e6 + 1).fill(0))
         return a;
    .map(el => Math.floor(el/2))
    .reduce((a,b) => a+b, 0);
}
