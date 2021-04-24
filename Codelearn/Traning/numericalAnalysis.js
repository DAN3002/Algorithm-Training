function numericalAnalysis(n){
    for(let i = 1; i < n; i++)
    {
        let denta = Math.pow(2*i-1, 2) + 8*n;
        if(Number.isInteger(Math.sqrt(denta))) {
            return true;
        }
    }
    return false;
}
