function deg(s){
    const n = s.length;
    if (n === 1) {
        return 0;
    }

    for(let i = 0; i <= Math.floor(n / 2); i++) {
        if (s[i] !== s[n - 1 - i]) {
            return 0;
        }
    }

    return 1 + deg(s.substring(0, Math.floor((n + 1) / 2)));
}
