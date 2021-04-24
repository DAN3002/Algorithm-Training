function counterPoN(l,r,k){
    let count = 0;

    const end2 = Math.sqrt(r);
    const end3 = Math.cbrt(r);
    for(let x = Math.ceil(Math.sqrt(l)); x <= end2; x++) {
        for(let y = Math.ceil(Math.cbrt(l)); y <= end3; y++) {
            if(Math.abs(x ** 2 -  y ** 3) <= k) {
                count++;
            }
        }
    }

    return count || -1;
}
