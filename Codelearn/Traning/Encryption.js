function encryption(s){
    s = s.replace(new RegExp(' ', 'g'), '');

    const n = s.length;
    const w = Math.ceil(Math.sqrt(n));
    const h = n/w;

    s = s.match(new RegExp(`.{0,${w}}`, 'g'));

    let out = '';

    for(let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {
            out += s[j][i] || '';
        }
    }

    return out;
}
