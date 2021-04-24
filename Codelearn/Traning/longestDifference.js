function longestDifference(n){
    let str = n.toString(2);
    let a = (str.match(/0+/g) || [""]).map(el => el.length);
    let b = (str.match(/1+/g) || [""]).map(el => el.length);
    return Math.abs(Math.max(...a) - Math.max(...b));
}
