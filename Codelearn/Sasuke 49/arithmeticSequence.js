function arithmeticSequence(a){
    a = a.sort((a,b) => a-b);
    if(a.length == 1) return true;
 
    if(a.length < 3) return false;
    let d = a[1] - a[0];
    return a.every((el, index) => index == 0 || el - d == a[index - 1]);
}
 