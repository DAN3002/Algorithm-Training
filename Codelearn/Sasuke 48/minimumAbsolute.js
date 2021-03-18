function minimumAbsolute(arr){
    if(arr.length < 2) return [];
 
    const out = [];
    arr.sort((a,b) => a-b);
 
    const min = getMin(arr);
 
    const map = new Map();
    for(const i of arr) map.set(i, true);
 
    for(const i of arr) {
        if(map.get(i + min)) out.push([i, i + min]);
    }
 
    return out;
}
 
function getMin(arr) {
    let min = 1e5;
    for(let i = 0; i < arr.length - 1; i++) {
        min = Math.min(arr[i + 1] - arr[i], min);
    }
    return min;
}