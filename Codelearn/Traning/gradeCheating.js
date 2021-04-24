function gradeCheating(n, m, a){
    return Math.min(m, a.reduce((a,b) => a+b, 0));
}
 