function trioOfPrimes(n) {
    const map = new Map();

    const f = Array(n + 1).fill(true);
    for(let i = 2; i <= n; i++) {
        if(f[i]) {
            map.set(i, true);
            for(let j = i ** 2; j <= n - 4; j += i) {
                f[j] = false;
            }
        }
    }


    const out = [];
    map.forEach((val, i) => {
        const a = n - i;
        map.forEach((val2, i2) => {
            if(i2 >= i && a - i2 >= i2 && map.get(a - i2)) {
                out.push([i, i2, a - i2]);
            }
        })
    });

    return out.length ? out : [[-1]];
}
