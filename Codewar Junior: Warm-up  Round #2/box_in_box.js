function boxInBox(a,b){
    // if(a.every((el,index) => b[index] == el)) return false;
    b.sort((a,b) => a-b);
    a.sort((a,b) => a-b);
    return check(a,b) || check(b,a);
}
 
function check(a,b){
    for(let i = 0; i < 3; i++){
        if(a[i] < b[i]) return false;
    }
    return true;
}