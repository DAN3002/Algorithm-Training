function harvestOranges(m,k,a){
    let out = 0;
    console.log(a.length);

    for(let index = 0; index <= a.length - 2 + k; index++) {
        // console.log(index - k);
        const i = Math.min(a.length - 1, index);
        if (index >= k) {
            console.log(index, index - k, index - k > a.length - 1);
            a[index-k] = -1;
        }
        let c = m;
        for(let j = 0; j <= i; j++) {
            const el = a[j];
            if(el > 0 && c > 0) {
                if(el >= c) {
                    out += c;
                    a[j] -= c;
                    c = 0;
                } else {
                    out += el;
                    c -= el;
                    a[j] = 0;
                }
            }
        }
        // console.log(a);
        // console.log(out);
    }

    return out;
}

