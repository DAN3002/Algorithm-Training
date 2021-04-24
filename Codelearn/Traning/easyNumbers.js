function easyNumbers(a,b){
    let out = [];
    for(let i = a; i <= b; i++)
    {
        let map = [...i.toString()];
        if(map.every(el => i % Number(el) == 0)) out.push(i);
    }
    return out;
}
