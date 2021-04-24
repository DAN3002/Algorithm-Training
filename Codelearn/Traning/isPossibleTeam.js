function isPossibleTeam(n, a, b, s){
    let midle = (s-a-b) / (n-2);
    return midle >= a && midle <= b;
}
