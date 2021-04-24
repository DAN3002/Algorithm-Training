function reduceArrayMod(arr){
    const mol = 1e9 + 7;

    let out = 1;
    for(let i of arr){
        out = (out *i) % mol;
    }
    return out;
}
