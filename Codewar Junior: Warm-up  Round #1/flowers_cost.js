function flowersCost(flowers,l,c){
    let sum = flowers.reduce((a,b) => a+b, 0);
    return sum % 2 == 0 ? sum*c : sum*l;
}