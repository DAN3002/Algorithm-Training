function data(a,b,k){
    let f = Array(b.length).fill(0);

    for(let [i, el] of a.entries()) {
        const time = b[i];
        for(let j = i; j <= i + time && j < f.length; j++) f[j] += el;
    }
    console.log(f);

    return f.findIndex(el => el >= k);
}
