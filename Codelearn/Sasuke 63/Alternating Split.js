function decrypt(s,n){
    for(let i = 0; i < n; i++) {
        s = process(s);
    }

    return s;
}

function process(str) {
    const n = Math.floor(str.length / 2);

    const s1 = [...str.substring(0, n)];
    const s2 = [...str.substring(n)];

    let out = '';
    for(let i = 0; i < n; i++) {
        out += s2[i] + s1[i];
    }

    if(str.length % 2 !== 0) out += s2.slice(-1)[0];

    return out;
}
