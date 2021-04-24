function splitMoney(arr){
    let max = 0;
    let map = new Map();
    for(let i of arr){
        let current = (map.get(i) || 0) + 1;
        map.set(i, current);
        max = Math.max(current, max);
    }

    return max;
}
