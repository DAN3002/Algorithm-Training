function arrayErasing(a){
    if(a.every(el => el == a[0])) return 1;
    let str = a.join("");    
    return Math.min(str.match(/0+/g).length, str.match(/1+/g).length) + 1;
}
 