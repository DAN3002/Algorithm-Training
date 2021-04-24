function numberOfMilkBottles(a, b, c){
    if(c < a) return 0;
    let floor = Math.floor(c/a);
    c = c % a;
    return floor + numberOfMilkBottles(a,b,c + floor*b);
}