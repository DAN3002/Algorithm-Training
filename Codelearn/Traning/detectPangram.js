function isPangram(str){
    str = str.toLowerCase();

    const f = Array(25).fill(false);
    for(let i = 0; i < str.length; i++) f[str.charCodeAt(i) - 97] = true;

    return f.every(el => el);
}
