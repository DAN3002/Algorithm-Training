function onlineLearningTrouble(a, b, c, k){
    let map = Array(a.length).fill(0);
    map = map.map((el, index) => a[index] + c[index]);
    map.sort((a,b) => a-b);
    let sum = 0;
    for(let i = 0; i < k; i++) sum += map[i];
    return sum + Math.min(...b)*k;
}
 