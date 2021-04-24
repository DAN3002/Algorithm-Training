function disappearedNumbers(a){
    const map = new Map();
    for(let i of a) map.set(i, true);

    let out = [];
    for(let i = 1 ; i <= a.length; i++) {
        if(!map.get(i)) out.push(i);
    }

    return out;
}
