function maxMultiplication(a){
    let b = a.filter(el => el > 0).sort((a,b) => b-a);
    let c = a.filter(el => el < 0).sort((a,b) => a-b);
    return Math.max(0, (b[0] * b[1]) || 0, (c[0] * c[1]) || 0);
}

