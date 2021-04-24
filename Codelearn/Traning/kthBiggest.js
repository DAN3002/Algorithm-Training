function kthBiggest(arr, k){
    let map = Array.from(new Set(arr)).sort((a,b) => b-a);
    return map.length < k ? -1 : map[k-1];
}
