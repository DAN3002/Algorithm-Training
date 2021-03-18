function numericalAnalysis(n){
    let old = n;
    if(n == 1) return "-1";
    let str = "";
    for(let i = 2; i <= 9; i++)
    {
        if(i == old) continue;
        while(n % i == 0){
            str = i + str;
            n /= i;
        }
    }
    return n == 1 ? str : "-1";
}