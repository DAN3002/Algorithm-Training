function countPerfectTeam(a, b, c){
    if(a == 0 || b == 0) return 0;
    if(a != b) return Math.min(a,b);
    return Math.floor((a+b+c) / 3);
}
 