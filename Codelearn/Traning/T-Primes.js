function collect(a,b){
    if(a <= 0 || b < 0) return [-1];
    const out = [];

    const n = Math.floor(Math.sqrt(b));
    const f = Array(n + 1).fill(true);
    for(let i = 2; i <= Math.floor(n); i++) {
        if(f[i]) {
            if(i ** 2 >= a) out.push(i ** 2);
            for(let j = i ** 2; j <= n; j += i) {
                f[j] = false;
            }
        }
    }

    return !out.length ? [-1] : out;
}
