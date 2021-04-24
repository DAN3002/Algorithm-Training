function rotateTable(a, b, c, d){
    let map = [
        a/c - b/d,
        c/d - a/b,
        d/b - c/a,
        b/a - d/c
    ];
    let  max = Math.max(...map);
    return map.findIndex(el => el == max);
}
 