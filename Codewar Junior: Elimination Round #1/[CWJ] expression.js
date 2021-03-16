function expression(n,a,b){
    for(let i = 0; i <= Math.floor(n/a); i++){
        let c = n -  i *a;
        if(Number.isInteger(c/b)) return true;
    }
    return false;
}