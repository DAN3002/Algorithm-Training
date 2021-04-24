function stringGroupNumber(arr){
    arr = arr.map(el => Array.from(new Set([...el.toLowerCase()])).sort().join(""));
    return new Set(arr).size;
}
