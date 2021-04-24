function countOx(a,k){
    return a.map(el => Math.abs(parseInt(Array.from(el + "").reverse().join(""))) - el).filter(el => el % k == 0).length;
}