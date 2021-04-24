function reverse(n){
    let digit, result = 0;
    while(n){
        digit = n % 10;
        result = (result * 10) + digit;
        n = n / 10 | 0;
    }  
    return result
}
function squaredNumbers(n){
    const map = new Map;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        map.set(i ** 2, true);
    }

    const out = [];
    for(let i = 1; i <= n; i++) {
        const minus = cal(i);
        if (map.get(minus)) {
            out.push(i);
        }
    }

    return out.length ? out : [-1];
}

function cal(n) {
    return n - reverse(n);
}
