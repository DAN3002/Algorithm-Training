function devidedBy36(num){
    let map = Array.from(num).map(el => parseInt(el));
    let last = map[map.length-1] + map[map.length - 2] * 10;
    let sum = map.reduce((a,b) => a+b,0);
    return last%4 === 0 && sum%9 == 0;
}
 